import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckRunStatusEnum } from "./auditcheckrunstatusenum";
/**
 * Information about the audit check.
**/
export declare class AuditCheckDetails extends SpeakeasyBase {
    checkCompliant?: boolean;
    checkRunStatus?: AuditCheckRunStatusEnum;
    errorCode?: string;
    message?: string;
    nonCompliantResourcesCount?: number;
    suppressedNonCompliantResourcesCount?: number;
    totalResourcesCount?: number;
}
