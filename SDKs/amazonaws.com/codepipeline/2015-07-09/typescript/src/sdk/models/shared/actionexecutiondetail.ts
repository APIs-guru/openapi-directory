import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionExecutionInput } from "./actionexecutioninput";
import { ActionExecutionOutput } from "./actionexecutionoutput";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";


// ActionExecutionDetail
/** 
 * Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. 
**/
export class ActionExecutionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionExecutionId" })
  actionExecutionId?: string;

  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=input" })
  input?: ActionExecutionInput;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=output" })
  output?: ActionExecutionOutput;

  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @Metadata({ data: "json, name=pipelineVersion" })
  pipelineVersion?: number;

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ActionExecutionStatusEnum;
}
