import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SocketAddress } from "./socketaddress";
import { CustomRoutingDestinationTrafficStateEnum } from "./customroutingdestinationtrafficstateenum";
import { CustomRoutingProtocolEnum } from "./customroutingprotocolenum";


// PortMapping
/** 
 * Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets. 
**/
export class PortMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorPort" })
  acceleratorPort?: number;

  @Metadata({ data: "json, name=DestinationSocketAddress" })
  destinationSocketAddress?: SocketAddress;

  @Metadata({ data: "json, name=DestinationTrafficState" })
  destinationTrafficState?: CustomRoutingDestinationTrafficStateEnum;

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @Metadata({ data: "json, name=Protocols" })
  protocols?: CustomRoutingProtocolEnum[];
}
