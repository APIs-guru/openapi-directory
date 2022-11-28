import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomRoutingEndpointDescription
/** 
 * A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.
**/
export class CustomRoutingEndpointDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId?: string;
}
