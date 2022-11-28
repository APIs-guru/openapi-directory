import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckDetails } from "./auditcheckdetails";
import { TaskStatistics } from "./taskstatistics";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";



export class DescribeAuditTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditDetails", elemType: AuditCheckDetails })
  auditDetails?: Map<string, AuditCheckDetails>;

  @SpeakeasyMetadata({ data: "json, name=scheduledAuditName" })
  scheduledAuditName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStartTime" })
  taskStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=taskStatistics" })
  taskStatistics?: TaskStatistics;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditTaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType?: AuditTaskTypeEnum;
}
