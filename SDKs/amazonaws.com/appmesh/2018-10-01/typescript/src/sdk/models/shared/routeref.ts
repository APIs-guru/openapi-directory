import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RouteRef
/** 
 * An object representing a route returned by a list operation.
**/
export class RouteRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName?: string;

  @SpeakeasyMetadata({ data: "json, name=routeName" })
  routeName?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName?: string;
}
