import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditCheckDetails } from "./auditcheckdetails";
import { TaskStatistics } from "./taskstatistics";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";


export class DescribeAuditTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditDetails", elemType: shared.AuditCheckDetails })
  auditDetails?: Map<string, AuditCheckDetails>;

  @Metadata({ data: "json, name=scheduledAuditName" })
  scheduledAuditName?: string;

  @Metadata({ data: "json, name=taskStartTime" })
  taskStartTime?: Date;

  @Metadata({ data: "json, name=taskStatistics" })
  taskStatistics?: TaskStatistics;

  @Metadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditTaskStatusEnum;

  @Metadata({ data: "json, name=taskType" })
  taskType?: AuditTaskTypeEnum;
}
