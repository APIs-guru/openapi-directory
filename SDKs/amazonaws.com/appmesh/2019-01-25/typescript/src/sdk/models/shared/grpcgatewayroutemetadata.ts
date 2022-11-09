import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcMetadataMatchMethod } from "./grpcmetadatamatchmethod";


// GrpcGatewayRouteMetadata
/** 
 * An object representing the metadata of the gateway route.
**/
export class GrpcGatewayRouteMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=invert" })
  invert?: boolean;

  @Metadata({ data: "json, name=match" })
  match?: GrpcMetadataMatchMethod;

  @Metadata({ data: "json, name=name" })
  name: string;
}
