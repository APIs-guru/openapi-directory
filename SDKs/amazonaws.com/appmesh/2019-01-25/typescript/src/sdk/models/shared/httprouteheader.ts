import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeaderMatchMethod } from "./headermatchmethod";



// HttpRouteHeader
/** 
 * An object that represents the HTTP header in the request.
**/
export class HttpRouteHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invert" })
  invert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: HeaderMatchMethod;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
