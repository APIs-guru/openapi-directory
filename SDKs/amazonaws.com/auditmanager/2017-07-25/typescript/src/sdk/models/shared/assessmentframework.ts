import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentControlSet } from "./assessmentcontrolset";
import { FrameworkMetadata } from "./frameworkmetadata";



// AssessmentFramework
/** 
 *  The file used to structure and automate Audit Manager assessments for a given compliance standard. 
**/
export class AssessmentFramework extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSets", elemType: AssessmentControlSet })
  controlSets?: AssessmentControlSet[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FrameworkMetadata;
}
