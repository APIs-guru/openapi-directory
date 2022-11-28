import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
**/
export declare class TimeBasedLinear extends SpeakeasyBase {
    linearInterval?: number;
    linearPercentage?: number;
}
