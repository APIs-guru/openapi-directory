import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteMatch
/** 
 * An object representing the requirements for a route to match HTTP requests for a virtual
 *          router.
**/
export class HttpRouteMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
