import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcMetadataMatchMethod } from "./grpcmetadatamatchmethod";



// GrpcGatewayRouteMetadata
/** 
 * An object representing the metadata of the gateway route.
**/
export class GrpcGatewayRouteMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invert" })
  invert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: GrpcMetadataMatchMethod;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
