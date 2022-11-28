import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeRange
/** 
 * Information about a time range.
**/
export class TimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}
