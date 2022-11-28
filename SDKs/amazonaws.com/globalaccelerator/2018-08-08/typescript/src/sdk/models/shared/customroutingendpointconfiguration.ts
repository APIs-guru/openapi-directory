import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomRoutingEndpointConfiguration
/** 
 * The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.
**/
export class CustomRoutingEndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId?: string;
}
