import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
**/
export declare class TimeBasedCanary extends SpeakeasyBase {
    canaryInterval?: number;
    canaryPercentage?: number;
}
