import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SocketAddress } from "./socketaddress";
import { CustomRoutingDestinationTrafficStateEnum } from "./customroutingdestinationtrafficstateenum";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";



// DestinationPortMapping
/** 
 * The port mappings for a specified endpoint IP address (destination).
**/
export class DestinationPortMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AcceleratorSocketAddresses", elemType: SocketAddress })
  acceleratorSocketAddresses?: SocketAddress[];

  @SpeakeasyMetadata({ data: "json, name=DestinationSocketAddress" })
  destinationSocketAddress?: SocketAddress;

  @SpeakeasyMetadata({ data: "json, name=DestinationTrafficState" })
  destinationTrafficState?: CustomRoutingDestinationTrafficStateEnum;

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;
}
