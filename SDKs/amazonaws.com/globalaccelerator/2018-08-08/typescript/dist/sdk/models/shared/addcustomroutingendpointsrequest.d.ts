import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointConfiguration } from "./customroutingendpointconfiguration";
export declare class AddCustomRoutingEndpointsRequest extends SpeakeasyBase {
    endpointConfigurations: CustomRoutingEndpointConfiguration[];
    endpointGroupArn: string;
}
