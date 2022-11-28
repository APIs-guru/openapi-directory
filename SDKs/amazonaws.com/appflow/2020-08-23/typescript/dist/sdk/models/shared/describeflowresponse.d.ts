import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationFlowConfig } from "./destinationflowconfig";
import { FlowStatusEnum } from "./flowstatusenum";
import { ExecutionDetails } from "./executiondetails";
import { SourceFlowConfig } from "./sourceflowconfig";
import { Task } from "./task";
import { TriggerConfig } from "./triggerconfig";
export declare class DescribeFlowResponse extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    destinationFlowConfigList?: DestinationFlowConfig[];
    flowArn?: string;
    flowName?: string;
    flowStatus?: FlowStatusEnum;
    flowStatusMessage?: string;
    kmsArn?: string;
    lastRunExecutionDetails?: ExecutionDetails;
    lastUpdatedAt?: Date;
    lastUpdatedBy?: string;
    sourceFlowConfig?: SourceFlowConfig;
    tags?: Map<string, string>;
    tasks?: Task[];
    triggerConfig?: TriggerConfig;
}
