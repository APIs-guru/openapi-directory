import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


// StreamFile
/** 
 * Represents a file to stream.
**/
export class StreamFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: number;

  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
