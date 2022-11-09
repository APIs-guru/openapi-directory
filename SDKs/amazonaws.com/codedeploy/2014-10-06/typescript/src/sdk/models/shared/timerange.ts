import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeRange
/** 
 * Information about a time range.
**/
export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}
