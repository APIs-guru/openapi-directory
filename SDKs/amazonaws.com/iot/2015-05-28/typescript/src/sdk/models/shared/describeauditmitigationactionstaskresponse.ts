import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MitigationAction } from "./mitigationaction";
import { AuditMitigationActionsTaskTarget } from "./auditmitigationactionstasktarget";
import { TaskStatisticsForAuditCheck } from "./taskstatisticsforauditcheck";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";



export class DescribeAuditMitigationActionsTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionsDefinition", elemType: MitigationAction })
  actionsDefinition?: MitigationAction[];

  @SpeakeasyMetadata({ data: "json, name=auditCheckToActionsMapping" })
  auditCheckToActionsMapping?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AuditMitigationActionsTaskTarget;

  @SpeakeasyMetadata({ data: "json, name=taskStatistics", elemType: TaskStatisticsForAuditCheck })
  taskStatistics?: Map<string, TaskStatisticsForAuditCheck>;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditMitigationActionsTaskStatusEnum;
}
