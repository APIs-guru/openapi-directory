import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MitigationAction } from "./mitigationaction";
import { AuditMitigationActionsTaskTarget } from "./auditmitigationactionstasktarget";
import { TaskStatisticsForAuditCheck } from "./taskstatisticsforauditcheck";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";


export class DescribeAuditMitigationActionsTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionsDefinition", elemType: shared.MitigationAction })
  actionsDefinition?: MitigationAction[];

  @Metadata({ data: "json, name=auditCheckToActionsMapping" })
  auditCheckToActionsMapping?: Map<string, string[]>;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=target" })
  target?: AuditMitigationActionsTaskTarget;

  @Metadata({ data: "json, name=taskStatistics", elemType: shared.TaskStatisticsForAuditCheck })
  taskStatistics?: Map<string, TaskStatisticsForAuditCheck>;

  @Metadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditMitigationActionsTaskStatusEnum;
}
