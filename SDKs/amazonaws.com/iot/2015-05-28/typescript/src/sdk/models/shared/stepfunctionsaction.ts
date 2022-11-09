import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StepFunctionsAction
/** 
 * Starts execution of a Step Functions state machine.
**/
export class StepFunctionsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionNamePrefix" })
  executionNamePrefix?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=stateMachineName" })
  stateMachineName: string;
}
