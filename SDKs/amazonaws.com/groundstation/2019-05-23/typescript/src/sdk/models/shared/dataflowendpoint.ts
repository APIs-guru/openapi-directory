import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SocketAddress } from "./socketaddress";
import { EndpointStatusEnum } from "./endpointstatusenum";



// DataflowEndpoint
/** 
 * Information about a dataflow endpoint.
**/
export class DataflowEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: SocketAddress;

  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EndpointStatusEnum;
}
