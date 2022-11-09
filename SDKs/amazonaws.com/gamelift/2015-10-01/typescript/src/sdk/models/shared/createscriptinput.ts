import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3Location } from "./s3location";
import { Tag } from "./tag";


export class CreateScriptInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}
