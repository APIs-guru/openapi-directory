import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StepFunctionsAction
/** 
 * Starts execution of a Step Functions state machine.
**/
export class StepFunctionsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionNamePrefix" })
  executionNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachineName" })
  stateMachineName: string;
}
