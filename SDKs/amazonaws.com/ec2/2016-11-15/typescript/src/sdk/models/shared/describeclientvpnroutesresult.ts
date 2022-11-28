import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRoute } from "./clientvpnroute";



export class DescribeClientVpnRoutesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ClientVpnRoute })
  routes?: ClientVpnRoute[];
}
