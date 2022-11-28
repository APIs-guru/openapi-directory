import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRouteStatus } from "./clientvpnroutestatus";



export class CreateClientVpnRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: ClientVpnRouteStatus;
}
