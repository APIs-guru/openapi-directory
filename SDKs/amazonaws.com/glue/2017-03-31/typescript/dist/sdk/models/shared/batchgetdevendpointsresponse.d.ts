import { SpeakeasyBase } from "../../../internal/utils";
import { DevEndpoint } from "./devendpoint";
export declare class BatchGetDevEndpointsResponse extends SpeakeasyBase {
    devEndpoints?: DevEndpoint[];
    devEndpointsNotFound?: string[];
}
