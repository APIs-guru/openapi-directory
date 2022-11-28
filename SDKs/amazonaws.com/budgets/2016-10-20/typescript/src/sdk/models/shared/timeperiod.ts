import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimePeriod
/** 
 * The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. 
**/
export class TimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=Start" })
  start?: Date;
}
