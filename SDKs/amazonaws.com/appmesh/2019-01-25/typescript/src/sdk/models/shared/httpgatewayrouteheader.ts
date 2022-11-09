import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HeaderMatchMethod } from "./headermatchmethod";


// HttpGatewayRouteHeader
/** 
 * An object that represents the HTTP header in the gateway route.
**/
export class HttpGatewayRouteHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=invert" })
  invert?: boolean;

  @Metadata({ data: "json, name=match" })
  match?: HeaderMatchMethod;

  @Metadata({ data: "json, name=name" })
  name: string;
}
