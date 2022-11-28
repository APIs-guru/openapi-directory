import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called.
**/
export declare class LocationListEntry extends SpeakeasyBase {
    locationArn?: string;
    locationUri?: string;
}
