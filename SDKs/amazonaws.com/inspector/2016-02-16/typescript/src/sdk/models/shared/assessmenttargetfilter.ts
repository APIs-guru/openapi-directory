import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssessmentTargetFilter
/** 
 * Used as the request parameter in the <a>ListAssessmentTargets</a> action.
**/
export class AssessmentTargetFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetNamePattern" })
  assessmentTargetNamePattern?: string;
}
