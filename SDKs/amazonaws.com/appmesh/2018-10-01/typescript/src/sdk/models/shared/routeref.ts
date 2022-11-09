import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RouteRef
/** 
 * An object representing a route returned by a list operation.
**/
export class RouteRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=meshName" })
  meshName?: string;

  @Metadata({ data: "json, name=routeName" })
  routeName?: string;

  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName?: string;
}
