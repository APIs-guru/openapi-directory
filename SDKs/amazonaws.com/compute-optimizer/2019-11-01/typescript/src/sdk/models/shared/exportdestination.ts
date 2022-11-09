import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Destination } from "./s3destination";


// ExportDestination
/** 
 * Describes the destination of the recommendations export and metadata files.
**/
export class ExportDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3" })
  s3?: S3Destination;
}
