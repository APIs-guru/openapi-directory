import { SpeakeasyBase } from "../../../internal/utils";
import { SocketAddress } from "./socketaddress";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * Information about a dataflow endpoint.
**/
export declare class DataflowEndpoint extends SpeakeasyBase {
    address?: SocketAddress;
    mtu?: number;
    name?: string;
    status?: EndpointStatusEnum;
}
