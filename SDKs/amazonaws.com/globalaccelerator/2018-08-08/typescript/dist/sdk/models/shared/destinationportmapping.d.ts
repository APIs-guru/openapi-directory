import { SpeakeasyBase } from "../../../internal/utils";
import { SocketAddress } from "./socketaddress";
import { CustomRoutingDestinationTrafficStateEnum } from "./customroutingdestinationtrafficstateenum";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
/**
 * The port mappings for a specified endpoint IP address (destination).
**/
export declare class DestinationPortMapping extends SpeakeasyBase {
    acceleratorArn?: string;
    acceleratorSocketAddresses?: SocketAddress[];
    destinationSocketAddress?: SocketAddress;
    destinationTrafficState?: CustomRoutingDestinationTrafficStateEnum;
    endpointGroupArn?: string;
    endpointGroupRegion?: string;
    endpointId?: string;
    ipAddressType?: IpAddressTypeEnum;
}
