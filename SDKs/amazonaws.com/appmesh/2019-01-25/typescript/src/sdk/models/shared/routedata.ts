import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { RouteSpec } from "./routespec";
import { RouteStatus } from "./routestatus";



// RouteData
/** 
 * An object that represents a route returned by a describe operation.
**/
export class RouteData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=routeName" })
  routeName: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: RouteSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RouteStatus;

  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
