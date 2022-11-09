import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SocketAddress } from "./socketaddress";
import { SocketAddress } from "./socketaddress";
import { CustomRoutingDestinationTrafficStateEnum } from "./customroutingdestinationtrafficstateenum";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";


// DestinationPortMapping
/** 
 * The port mappings for a specified endpoint IP address (destination).
**/
export class DestinationPortMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn?: string;

  @Metadata({ data: "json, name=AcceleratorSocketAddresses", elemType: shared.SocketAddress })
  acceleratorSocketAddresses?: SocketAddress[];

  @Metadata({ data: "json, name=DestinationSocketAddress" })
  destinationSocketAddress?: SocketAddress;

  @Metadata({ data: "json, name=DestinationTrafficState" })
  destinationTrafficState?: CustomRoutingDestinationTrafficStateEnum;

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @Metadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion?: string;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @Metadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;
}
