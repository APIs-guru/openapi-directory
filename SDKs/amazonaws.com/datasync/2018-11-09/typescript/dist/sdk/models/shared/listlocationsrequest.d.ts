import { SpeakeasyBase } from "../../../internal/utils";
import { LocationFilter } from "./locationfilter";
/**
 * ListLocationsRequest
**/
export declare class ListLocationsRequest extends SpeakeasyBase {
    filters?: LocationFilter[];
    maxResults?: number;
    nextToken?: string;
}
