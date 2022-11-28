import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteMatch
/** 
 * An object representing the requirements for a route to match HTTP requests for a virtual
 *          router.
**/
export class HttpRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
