import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampValue
/** 
 * Contains information about a timestamp.
**/
export class TimestampValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeInMillis" })
  timeInMillis?: number;
}
