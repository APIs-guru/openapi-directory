import { SpeakeasyBase } from "../../../internal/utils";
import { DevEndpoint } from "./devendpoint";
export declare class GetDevEndpointsResponse extends SpeakeasyBase {
    devEndpoints?: DevEndpoint[];
    nextToken?: string;
}
