import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationFlowConfig } from "./destinationflowconfig";
import { FlowStatusEnum } from "./flowstatusenum";
import { ExecutionDetails } from "./executiondetails";
import { SourceFlowConfig } from "./sourceflowconfig";
import { Task } from "./task";
import { TriggerConfig } from "./triggerconfig";


export class DescribeFlowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationFlowConfigList", elemType: shared.DestinationFlowConfig })
  destinationFlowConfigList?: DestinationFlowConfig[];

  @Metadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @Metadata({ data: "json, name=flowName" })
  flowName?: string;

  @Metadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;

  @Metadata({ data: "json, name=flowStatusMessage" })
  flowStatusMessage?: string;

  @Metadata({ data: "json, name=kmsArn" })
  kmsArn?: string;

  @Metadata({ data: "json, name=lastRunExecutionDetails" })
  lastRunExecutionDetails?: ExecutionDetails;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @Metadata({ data: "json, name=sourceFlowConfig" })
  sourceFlowConfig?: SourceFlowConfig;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: Task[];

  @Metadata({ data: "json, name=triggerConfig" })
  triggerConfig?: TriggerConfig;
}
