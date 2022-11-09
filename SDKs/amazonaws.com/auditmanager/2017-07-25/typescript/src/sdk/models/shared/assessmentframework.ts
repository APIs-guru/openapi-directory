import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentControlSet } from "./assessmentcontrolset";
import { FrameworkMetadata } from "./frameworkmetadata";


// AssessmentFramework
/** 
 *  The file used to structure and automate Audit Manager assessments for a given compliance standard. 
**/
export class AssessmentFramework extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=controlSets", elemType: shared.AssessmentControlSet })
  controlSets?: AssessmentControlSet[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FrameworkMetadata;
}
