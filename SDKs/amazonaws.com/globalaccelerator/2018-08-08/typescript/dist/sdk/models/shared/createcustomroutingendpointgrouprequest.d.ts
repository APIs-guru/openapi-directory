import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingDestinationConfiguration } from "./customroutingdestinationconfiguration";
export declare class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    destinationConfigurations: CustomRoutingDestinationConfiguration[];
    endpointGroupRegion: string;
    idempotencyToken: string;
    listenerArn: string;
}
