import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcMetadataMatchMethod } from "./grpcmetadatamatchmethod";
/**
 * An object representing the metadata of the gateway route.
**/
export declare class GrpcGatewayRouteMetadata extends SpeakeasyBase {
    invert?: boolean;
    match?: GrpcMetadataMatchMethod;
    name: string;
}
