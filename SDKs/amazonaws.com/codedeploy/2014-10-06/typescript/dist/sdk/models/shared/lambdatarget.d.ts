import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionInfo } from "./lambdafunctioninfo";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
/**
 *  Information about the target AWS Lambda function during an AWS Lambda deployment.
**/
export declare class LambdaTarget extends SpeakeasyBase {
    deploymentId?: string;
    lambdaFunctionInfo?: LambdaFunctionInfo;
    lastUpdatedAt?: Date;
    lifecycleEvents?: LifecycleEvent[];
    status?: TargetStatusEnum;
    targetArn?: string;
    targetId?: string;
}
