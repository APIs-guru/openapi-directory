import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlComment } from "./controlcomment";
import { ControlResponseEnum } from "./controlresponseenum";
import { ControlStatusEnum } from "./controlstatusenum";



// AssessmentControl
/** 
 *  The control entity that represents a standard or custom control used in an Audit Manager assessment. 
**/
export class AssessmentControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentReportEvidenceCount" })
  assessmentReportEvidenceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: ControlComment })
  comments?: ControlComment[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceCount" })
  evidenceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceSources" })
  evidenceSources?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: ControlResponseEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ControlStatusEnum;
}
