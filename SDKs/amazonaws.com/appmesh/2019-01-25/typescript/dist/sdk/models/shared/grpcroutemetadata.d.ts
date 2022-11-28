import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteMetadataMatchMethod } from "./grpcroutemetadatamatchmethod";
/**
 * An object that represents the match metadata for the route.
**/
export declare class GrpcRouteMetadata extends SpeakeasyBase {
    invert?: boolean;
    match?: GrpcRouteMetadataMatchMethod;
    name: string;
}
