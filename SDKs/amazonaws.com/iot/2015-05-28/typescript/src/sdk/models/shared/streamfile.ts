import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// StreamFile
/** 
 * Represents a file to stream.
**/
export class StreamFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
