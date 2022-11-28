import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { Stream } from "./stream";



// FileLocation
/** 
 * The location of the OTA update.
**/
export class FileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: Stream;
}
