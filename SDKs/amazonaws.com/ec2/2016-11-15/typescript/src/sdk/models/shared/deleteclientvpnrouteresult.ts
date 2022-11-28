import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRouteStatus } from "./clientvpnroutestatus";



export class DeleteClientVpnRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: ClientVpnRouteStatus;
}
