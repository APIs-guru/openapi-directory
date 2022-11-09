import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingDestinationDescription } from "./customroutingdestinationdescription";
import { CustomRoutingEndpointDescription } from "./customroutingendpointdescription";


// CustomRoutingEndpointGroup
/** 
 * A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener. 
**/
export class CustomRoutingEndpointGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationDescriptions", elemType: shared.CustomRoutingDestinationDescription })
  destinationDescriptions?: CustomRoutingDestinationDescription[];

  @Metadata({ data: "json, name=EndpointDescriptions", elemType: shared.CustomRoutingEndpointDescription })
  endpointDescriptions?: CustomRoutingEndpointDescription[];

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @Metadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion?: string;
}
