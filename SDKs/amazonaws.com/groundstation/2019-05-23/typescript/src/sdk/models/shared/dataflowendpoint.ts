import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SocketAddress } from "./socketaddress";
import { EndpointStatusEnum } from "./endpointstatusenum";


// DataflowEndpoint
/** 
 * Information about a dataflow endpoint.
**/
export class DataflowEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: SocketAddress;

  @Metadata({ data: "json, name=mtu" })
  mtu?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: EndpointStatusEnum;
}
