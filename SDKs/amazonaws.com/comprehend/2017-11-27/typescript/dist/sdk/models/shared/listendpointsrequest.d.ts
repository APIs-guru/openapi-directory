import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointFilter } from "./endpointfilter";
export declare class ListEndpointsRequest extends SpeakeasyBase {
    filter?: EndpointFilter;
    maxResults?: number;
    nextToken?: string;
}
