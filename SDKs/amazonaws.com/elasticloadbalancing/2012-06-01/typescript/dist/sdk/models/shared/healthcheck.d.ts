import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a health check.
**/
export declare class HealthCheck extends SpeakeasyBase {
    healthyThreshold: number;
    interval: number;
    target: string;
    timeout: number;
    unhealthyThreshold: number;
}
