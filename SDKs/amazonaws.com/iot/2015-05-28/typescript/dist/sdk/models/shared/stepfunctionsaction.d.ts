import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Starts execution of a Step Functions state machine.
**/
export declare class StepFunctionsAction extends SpeakeasyBase {
    executionNamePrefix?: string;
    roleArn: string;
    stateMachineName: string;
}
