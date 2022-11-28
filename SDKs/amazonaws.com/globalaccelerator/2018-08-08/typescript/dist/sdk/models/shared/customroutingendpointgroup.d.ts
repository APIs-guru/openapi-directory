import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingDestinationDescription } from "./customroutingdestinationdescription";
import { CustomRoutingEndpointDescription } from "./customroutingendpointdescription";
/**
 * A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener.
**/
export declare class CustomRoutingEndpointGroup extends SpeakeasyBase {
    destinationDescriptions?: CustomRoutingDestinationDescription[];
    endpointDescriptions?: CustomRoutingEndpointDescription[];
    endpointGroupArn?: string;
    endpointGroupRegion?: string;
}
