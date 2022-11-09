import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { RouteSpec } from "./routespec";
import { RouteStatus } from "./routestatus";


// RouteData
/** 
 * An object that represents a route returned by a describe operation.
**/
export class RouteData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @Metadata({ data: "json, name=routeName" })
  routeName: string;

  @Metadata({ data: "json, name=spec" })
  spec: RouteSpec;

  @Metadata({ data: "json, name=status" })
  status: RouteStatus;

  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
