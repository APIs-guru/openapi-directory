import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointDescription } from "./endpointdescription";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";
/**
 * A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.
**/
export declare class EndpointGroup extends SpeakeasyBase {
    endpointDescriptions?: EndpointDescription[];
    endpointGroupArn?: string;
    endpointGroupRegion?: string;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: number;
    healthCheckProtocol?: HealthCheckProtocolEnum;
    portOverrides?: PortOverride[];
    thresholdCount?: number;
    trafficDialPercentage?: number;
}
