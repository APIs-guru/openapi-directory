import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpGatewayRoutePathRewrite
/** 
 * An object that represents the path to rewrite.
**/
export class HttpGatewayRoutePathRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;
}
