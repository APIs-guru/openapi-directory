import { SpeakeasyBase } from "../../../internal/utils";
import { NonCompliantResource } from "./noncompliantresource";
import { RelatedResource } from "./relatedresource";
import { AuditFindingSeverityEnum } from "./auditfindingseverityenum";
/**
 * The findings (results) of the audit.
**/
export declare class AuditFinding extends SpeakeasyBase {
    checkName?: string;
    findingId?: string;
    findingTime?: Date;
    isSuppressed?: boolean;
    nonCompliantResource?: NonCompliantResource;
    reasonForNonCompliance?: string;
    reasonForNonComplianceCode?: string;
    relatedResources?: RelatedResource[];
    severity?: AuditFindingSeverityEnum;
    taskId?: string;
    taskStartTime?: Date;
}
