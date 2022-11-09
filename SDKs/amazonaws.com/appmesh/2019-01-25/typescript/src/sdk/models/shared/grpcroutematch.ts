import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrpcRouteMetadata } from "./grpcroutemetadata";


// GrpcRouteMatch
/** 
 * An object that represents the criteria for determining a request match.
**/
export class GrpcRouteMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata", elemType: shared.GrpcRouteMetadata })
  metadata?: GrpcRouteMetadata[];

  @Metadata({ data: "json, name=methodName" })
  methodName?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
