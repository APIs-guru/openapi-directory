import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GatewayRouteHostnameMatch
/** 
 * An object representing the gateway route host name to match.
**/
export class GatewayRouteHostnameMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;
}
