import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Destination } from "./s3destination";


// Destination
/** 
 * Describes the location of the updated firmware.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Destination" })
  s3Destination?: S3Destination;
}
