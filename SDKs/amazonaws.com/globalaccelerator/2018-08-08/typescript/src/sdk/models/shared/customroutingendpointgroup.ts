import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingDestinationDescription } from "./customroutingdestinationdescription";
import { CustomRoutingEndpointDescription } from "./customroutingendpointdescription";



// CustomRoutingEndpointGroup
/** 
 * A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener. 
**/
export class CustomRoutingEndpointGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationDescriptions", elemType: CustomRoutingDestinationDescription })
  destinationDescriptions?: CustomRoutingDestinationDescription[];

  @SpeakeasyMetadata({ data: "json, name=EndpointDescriptions", elemType: CustomRoutingEndpointDescription })
  endpointDescriptions?: CustomRoutingEndpointDescription[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion?: string;
}
