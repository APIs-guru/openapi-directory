import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
export declare class AuditMitigationActionsTaskTarget extends SpeakeasyBase {
    auditCheckToReasonCodeFilter?: Map<string, string[]>;
    auditTaskId?: string;
    findingIds?: string[];
}
