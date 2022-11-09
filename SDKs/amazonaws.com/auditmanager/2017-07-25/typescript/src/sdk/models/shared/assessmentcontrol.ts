import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControlComment } from "./controlcomment";
import { ControlResponseEnum } from "./controlresponseenum";
import { ControlStatusEnum } from "./controlstatusenum";


// AssessmentControl
/** 
 *  The control entity that represents a standard or custom control used in an Audit Manager assessment. 
**/
export class AssessmentControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentReportEvidenceCount" })
  assessmentReportEvidenceCount?: number;

  @Metadata({ data: "json, name=comments", elemType: shared.ControlComment })
  comments?: ControlComment[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=evidenceCount" })
  evidenceCount?: number;

  @Metadata({ data: "json, name=evidenceSources" })
  evidenceSources?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=response" })
  response?: ControlResponseEnum;

  @Metadata({ data: "json, name=status" })
  status?: ControlStatusEnum;
}
