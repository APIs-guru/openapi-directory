import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampRange
/** 
 * This data type is used in the <a>AssessmentRunFilter</a> data type.
**/
export class TimestampRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beginDate" })
  beginDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;
}
