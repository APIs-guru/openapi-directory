import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeader } from "./httprouteheader";
import { HttpMethodEnum } from "./httpmethodenum";
import { HttpPathMatch } from "./httppathmatch";
import { HttpQueryParameter } from "./httpqueryparameter";
import { HttpSchemeEnum } from "./httpschemeenum";



// HttpRouteMatch
/** 
 * An object that represents the requirements for a route to match HTTP requests for a virtual router.
**/
export class HttpRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpRouteHeader })
  headers?: HttpRouteHeader[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: HttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: HttpPathMatch;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: HttpQueryParameter })
  queryParameters?: HttpQueryParameter[];

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: HttpSchemeEnum;
}
