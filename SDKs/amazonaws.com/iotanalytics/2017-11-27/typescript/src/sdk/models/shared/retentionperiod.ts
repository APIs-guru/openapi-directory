import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class RetentionPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
