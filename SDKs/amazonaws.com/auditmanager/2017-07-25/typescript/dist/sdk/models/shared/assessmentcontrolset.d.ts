import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentControl } from "./assessmentcontrol";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { ControlSetStatusEnum } from "./controlsetstatusenum";
/**
 *  Represents a set of controls in an Audit Manager assessment.
**/
export declare class AssessmentControlSet extends SpeakeasyBase {
    controls?: AssessmentControl[];
    delegations?: Delegation[];
    description?: string;
    id?: string;
    manualEvidenceCount?: number;
    roles?: Role[];
    status?: ControlSetStatusEnum;
    systemEvidenceCount?: number;
}
