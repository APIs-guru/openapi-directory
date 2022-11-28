import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointStatus } from "./clientvpnendpointstatus";



export class CreateClientVpnEndpointResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata()
  dnsName?: string;

  @SpeakeasyMetadata()
  status?: ClientVpnEndpointStatus;
}
