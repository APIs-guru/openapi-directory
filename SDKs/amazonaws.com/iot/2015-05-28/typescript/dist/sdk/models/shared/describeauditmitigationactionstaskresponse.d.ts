import { SpeakeasyBase } from "../../../internal/utils";
import { MitigationAction } from "./mitigationaction";
import { AuditMitigationActionsTaskTarget } from "./auditmitigationactionstasktarget";
import { TaskStatisticsForAuditCheck } from "./taskstatisticsforauditcheck";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";
export declare class DescribeAuditMitigationActionsTaskResponse extends SpeakeasyBase {
    actionsDefinition?: MitigationAction[];
    auditCheckToActionsMapping?: Map<string, string[]>;
    endTime?: Date;
    startTime?: Date;
    target?: AuditMitigationActionsTaskTarget;
    taskStatistics?: Map<string, TaskStatisticsForAuditCheck>;
    taskStatus?: AuditMitigationActionsTaskStatusEnum;
}
