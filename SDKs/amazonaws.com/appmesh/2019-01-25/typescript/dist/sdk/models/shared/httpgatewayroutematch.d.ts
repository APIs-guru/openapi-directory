import { SpeakeasyBase } from "../../../internal/utils";
import { HttpGatewayRouteHeader } from "./httpgatewayrouteheader";
import { GatewayRouteHostnameMatch } from "./gatewayroutehostnamematch";
import { HttpMethodEnum } from "./httpmethodenum";
import { HttpPathMatch } from "./httppathmatch";
import { HttpQueryParameter } from "./httpqueryparameter";
/**
 * An object that represents the criteria for determining a request match.
**/
export declare class HttpGatewayRouteMatch extends SpeakeasyBase {
    headers?: HttpGatewayRouteHeader[];
    hostname?: GatewayRouteHostnameMatch;
    method?: HttpMethodEnum;
    path?: HttpPathMatch;
    prefix?: string;
    queryParameters?: HttpQueryParameter[];
}
