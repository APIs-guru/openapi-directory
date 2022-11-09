import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
/**
 * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
**/
export declare class HealthCheckConfiguration extends SpeakeasyBase {
    healthyThreshold?: number;
    interval?: number;
    path?: string;
    protocol?: HealthCheckProtocolEnum;
    timeout?: number;
    unhealthyThreshold?: number;
}
