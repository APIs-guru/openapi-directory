import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
import { Stream } from "./stream";


// FileLocation
/** 
 * The location of the OTA update.
**/
export class FileLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;

  @Metadata({ data: "json, name=stream" })
  stream?: Stream;
}
