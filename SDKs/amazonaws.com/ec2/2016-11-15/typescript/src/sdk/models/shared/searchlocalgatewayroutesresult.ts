import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRoute } from "./localgatewayroute";



export class SearchLocalGatewayRoutesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: LocalGatewayRoute })
  routes?: LocalGatewayRoute[];
}
