import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcRouteMetadataMatchMethod } from "./grpcroutemetadatamatchmethod";


// GrpcRouteMetadata
/** 
 * An object that represents the match metadata for the route.
**/
export class GrpcRouteMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=invert" })
  invert?: boolean;

  @Metadata({ data: "json, name=match" })
  match?: GrpcRouteMetadataMatchMethod;

  @Metadata({ data: "json, name=name" })
  name: string;
}
