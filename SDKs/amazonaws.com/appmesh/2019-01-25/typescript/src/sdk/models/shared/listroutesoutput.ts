import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteRef } from "./routeref";



// ListRoutesOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListRoutesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: RouteRef })
  routes: RouteRef[];
}
