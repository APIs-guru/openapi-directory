import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimePeriod
/** 
 * The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. 
**/
export class TimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=End" })
  end?: Date;

  @Metadata({ data: "json, name=Start" })
  start?: Date;
}
