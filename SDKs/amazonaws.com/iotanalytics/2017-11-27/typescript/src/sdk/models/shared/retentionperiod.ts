import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class RetentionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
