import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssessmentTargetFilter
/** 
 * Used as the request parameter in the <a>ListAssessmentTargets</a> action.
**/
export class AssessmentTargetFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetNamePattern" })
  assessmentTargetNamePattern?: string;
}
