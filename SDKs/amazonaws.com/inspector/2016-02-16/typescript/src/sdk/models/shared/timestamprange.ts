import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampRange
/** 
 * This data type is used in the <a>AssessmentRunFilter</a> data type.
**/
export class TimestampRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=beginDate" })
  beginDate?: Date;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;
}
