import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationRange } from "./durationrange";



// AssessmentTemplateFilter
/** 
 * Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
**/
export class AssessmentTemplateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationRange" })
  durationRange?: DurationRange;

  @SpeakeasyMetadata({ data: "json, name=namePattern" })
  namePattern?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns?: string[];
}
