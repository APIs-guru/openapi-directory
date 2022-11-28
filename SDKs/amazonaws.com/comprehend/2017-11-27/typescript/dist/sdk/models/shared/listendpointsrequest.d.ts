import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointFilter } from "./endpointfilter";
export declare class ListEndpointsRequest extends SpeakeasyBase {
    filter?: EndpointFilter;
    maxResults?: number;
    nextToken?: string;
}
