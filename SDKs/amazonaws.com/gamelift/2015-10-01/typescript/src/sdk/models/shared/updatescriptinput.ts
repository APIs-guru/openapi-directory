import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


export class UpdateScriptInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ScriptId" })
  scriptId: string;

  @Metadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}
