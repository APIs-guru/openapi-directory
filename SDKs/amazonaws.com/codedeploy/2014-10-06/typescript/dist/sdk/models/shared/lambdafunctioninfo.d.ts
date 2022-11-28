import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about a Lambda function specified in a deployment.
**/
export declare class LambdaFunctionInfo extends SpeakeasyBase {
    currentVersion?: string;
    functionAlias?: string;
    functionName?: string;
    targetVersion?: string;
    targetVersionWeight?: number;
}
