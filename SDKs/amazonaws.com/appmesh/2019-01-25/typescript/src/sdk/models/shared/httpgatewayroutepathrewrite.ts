import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpGatewayRoutePathRewrite
/** 
 * An object that represents the path to rewrite.
**/
export class HttpGatewayRoutePathRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;
}
