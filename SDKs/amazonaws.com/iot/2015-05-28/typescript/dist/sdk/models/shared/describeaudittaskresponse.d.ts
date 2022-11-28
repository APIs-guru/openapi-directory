import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckDetails } from "./auditcheckdetails";
import { TaskStatistics } from "./taskstatistics";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";
export declare class DescribeAuditTaskResponse extends SpeakeasyBase {
    auditDetails?: Map<string, AuditCheckDetails>;
    scheduledAuditName?: string;
    taskStartTime?: Date;
    taskStatistics?: TaskStatistics;
    taskStatus?: AuditTaskStatusEnum;
    taskType?: AuditTaskTypeEnum;
}
