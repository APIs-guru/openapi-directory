import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpGatewayRouteHeader } from "./httpgatewayrouteheader";
import { GatewayRouteHostnameMatch } from "./gatewayroutehostnamematch";
import { HttpMethodEnum } from "./httpmethodenum";
import { HttpPathMatch } from "./httppathmatch";
import { HttpQueryParameter } from "./httpqueryparameter";



// HttpGatewayRouteMatch
/** 
 * An object that represents the criteria for determining a request match.
**/
export class HttpGatewayRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpGatewayRouteHeader })
  headers?: HttpGatewayRouteHeader[];

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameMatch;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: HttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: HttpPathMatch;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: HttpQueryParameter })
  queryParameters?: HttpQueryParameter[];
}
