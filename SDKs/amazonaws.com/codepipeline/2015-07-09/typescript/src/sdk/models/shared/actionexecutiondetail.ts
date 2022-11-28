import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionInput } from "./actionexecutioninput";
import { ActionExecutionOutput } from "./actionexecutionoutput";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";



// ActionExecutionDetail
/** 
 * Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. 
**/
export class ActionExecutionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionExecutionId" })
  actionExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: ActionExecutionInput;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: ActionExecutionOutput;

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineVersion" })
  pipelineVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ActionExecutionStatusEnum;
}
