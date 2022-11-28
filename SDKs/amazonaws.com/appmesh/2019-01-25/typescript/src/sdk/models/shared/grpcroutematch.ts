import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteMetadata } from "./grpcroutemetadata";



// GrpcRouteMatch
/** 
 * An object that represents the criteria for determining a request match.
**/
export class GrpcRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GrpcRouteMetadata })
  metadata?: GrpcRouteMetadata[];

  @SpeakeasyMetadata({ data: "json, name=methodName" })
  methodName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
