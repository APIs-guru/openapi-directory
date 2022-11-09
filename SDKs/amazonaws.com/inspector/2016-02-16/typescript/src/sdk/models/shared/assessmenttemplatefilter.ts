import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DurationRange } from "./durationrange";


// AssessmentTemplateFilter
/** 
 * Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
**/
export class AssessmentTemplateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationRange" })
  durationRange?: DurationRange;

  @Metadata({ data: "json, name=namePattern" })
  namePattern?: string;

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns?: string[];
}
