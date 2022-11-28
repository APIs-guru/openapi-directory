import { SpeakeasyBase } from "../../../internal/utils";
import { ControlComment } from "./controlcomment";
import { ControlResponseEnum } from "./controlresponseenum";
import { ControlStatusEnum } from "./controlstatusenum";
/**
 *  The control entity that represents a standard or custom control used in an Audit Manager assessment.
**/
export declare class AssessmentControl extends SpeakeasyBase {
    assessmentReportEvidenceCount?: number;
    comments?: ControlComment[];
    description?: string;
    evidenceCount?: number;
    evidenceSources?: string[];
    id?: string;
    name?: string;
    response?: ControlResponseEnum;
    status?: ControlStatusEnum;
}
