import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GatewayRouteHostnameMatch
/** 
 * An object representing the gateway route host name to match.
**/
export class GatewayRouteHostnameMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}
