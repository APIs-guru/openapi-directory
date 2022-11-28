import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointStatus } from "./clientvpnendpointstatus";



export class DeleteClientVpnEndpointResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: ClientVpnEndpointStatus;
}
