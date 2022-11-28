import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpoint } from "./clientvpnendpoint";



export class DescribeClientVpnEndpointsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientVpnEndpoint })
  clientVpnEndpoints?: ClientVpnEndpoint[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
