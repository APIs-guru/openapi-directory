import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeader } from "./httprouteheader";
import { HttpMethodEnum } from "./httpmethodenum";
import { HttpPathMatch } from "./httppathmatch";
import { HttpQueryParameter } from "./httpqueryparameter";
import { HttpSchemeEnum } from "./httpschemeenum";
/**
 * An object that represents the requirements for a route to match HTTP requests for a virtual router.
**/
export declare class HttpRouteMatch extends SpeakeasyBase {
    headers?: HttpRouteHeader[];
    method?: HttpMethodEnum;
    path?: HttpPathMatch;
    prefix?: string;
    queryParameters?: HttpQueryParameter[];
    scheme?: HttpSchemeEnum;
}
