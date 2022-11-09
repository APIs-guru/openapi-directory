import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=headers", elemType: shared.HttpGatewayRouteHeader })
  headers?: HttpGatewayRouteHeader[];

  @Metadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameMatch;

  @Metadata({ data: "json, name=method" })
  method?: HttpMethodEnum;

  @Metadata({ data: "json, name=path" })
  path?: HttpPathMatch;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=queryParameters", elemType: shared.HttpQueryParameter })
  queryParameters?: HttpQueryParameter[];
}
