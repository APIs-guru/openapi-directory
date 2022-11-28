import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfiguration } from "./endpointconfiguration";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";
export declare class UpdateEndpointGroupRequest extends SpeakeasyBase {
    endpointConfigurations?: EndpointConfiguration[];
    endpointGroupArn: string;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: number;
    healthCheckProtocol?: HealthCheckProtocolEnum;
    portOverrides?: PortOverride[];
    thresholdCount?: number;
    trafficDialPercentage?: number;
}
