import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { Tag } from "./tag";



export class CreateScriptInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}
