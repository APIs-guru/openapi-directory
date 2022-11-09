import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=headers", elemType: shared.HttpRouteHeader })
  headers?: HttpRouteHeader[];

  @Metadata({ data: "json, name=method" })
  method?: HttpMethodEnum;

  @Metadata({ data: "json, name=path" })
  path?: HttpPathMatch;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=queryParameters", elemType: shared.HttpQueryParameter })
  queryParameters?: HttpQueryParameter[];

  @Metadata({ data: "json, name=scheme" })
  scheme?: HttpSchemeEnum;
}
