import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteMetadata } from "./grpcroutemetadata";
/**
 * An object that represents the criteria for determining a request match.
**/
export declare class GrpcRouteMatch extends SpeakeasyBase {
    metadata?: GrpcRouteMetadata[];
    methodName?: string;
    serviceName?: string;
}
