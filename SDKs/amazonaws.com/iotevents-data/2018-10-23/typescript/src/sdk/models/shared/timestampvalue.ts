import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampValue
/** 
 * Contains information about a timestamp.
**/
export class TimestampValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeInMillis" })
  timeInMillis?: number;
}
