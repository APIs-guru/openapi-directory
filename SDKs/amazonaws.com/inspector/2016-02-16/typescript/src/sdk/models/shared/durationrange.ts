import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DurationRange
/** 
 * This data type is used in the <a>AssessmentTemplateFilter</a> data type.
**/
export class DurationRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxSeconds" })
  maxSeconds?: number;

  @Metadata({ data: "json, name=minSeconds" })
  minSeconds?: number;
}
