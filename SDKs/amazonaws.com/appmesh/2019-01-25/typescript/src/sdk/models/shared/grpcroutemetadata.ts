import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteMetadataMatchMethod } from "./grpcroutemetadatamatchmethod";



// GrpcRouteMetadata
/** 
 * An object that represents the match metadata for the route.
**/
export class GrpcRouteMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invert" })
  invert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: GrpcRouteMetadataMatchMethod;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
