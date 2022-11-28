import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfiguration } from "./endpointconfiguration";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";
export declare class CreateEndpointGroupRequest extends SpeakeasyBase {
    endpointConfigurations?: EndpointConfiguration[];
    endpointGroupRegion: string;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: number;
    healthCheckProtocol?: HealthCheckProtocolEnum;
    idempotencyToken: string;
    listenerArn: string;
    portOverrides?: PortOverride[];
    thresholdCount?: number;
    trafficDialPercentage?: number;
}
