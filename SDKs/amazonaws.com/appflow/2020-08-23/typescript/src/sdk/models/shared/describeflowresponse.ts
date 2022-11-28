import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationFlowConfig } from "./destinationflowconfig";
import { FlowStatusEnum } from "./flowstatusenum";
import { ExecutionDetails } from "./executiondetails";
import { SourceFlowConfig } from "./sourceflowconfig";
import { Task } from "./task";
import { TriggerConfig } from "./triggerconfig";



export class DescribeFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationFlowConfigList", elemType: DestinationFlowConfig })
  destinationFlowConfigList?: DestinationFlowConfig[];

  @SpeakeasyMetadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @SpeakeasyMetadata({ data: "json, name=flowName" })
  flowName?: string;

  @SpeakeasyMetadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=flowStatusMessage" })
  flowStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsArn" })
  kmsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRunExecutionDetails" })
  lastRunExecutionDetails?: ExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFlowConfig" })
  sourceFlowConfig?: SourceFlowConfig;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: Task })
  tasks?: Task[];

  @SpeakeasyMetadata({ data: "json, name=triggerConfig" })
  triggerConfig?: TriggerConfig;
}
