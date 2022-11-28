import { SpeakeasyBase } from "../../../internal/utils";
import { LocationListEntry } from "./locationlistentry";
/**
 * ListLocationsResponse
**/
export declare class ListLocationsResponse extends SpeakeasyBase {
    locations?: LocationListEntry[];
    nextToken?: string;
}
