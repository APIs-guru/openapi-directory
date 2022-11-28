import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DurationRange
/** 
 * This data type is used in the <a>AssessmentTemplateFilter</a> data type.
**/
export class DurationRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxSeconds" })
  maxSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=minSeconds" })
  minSeconds?: number;
}
