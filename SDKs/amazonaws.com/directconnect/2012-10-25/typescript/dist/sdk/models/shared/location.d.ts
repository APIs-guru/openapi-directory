import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Direct Connect location.
**/
export declare class Location extends SpeakeasyBase {
    availableMacSecPortSpeeds?: string[];
    availablePortSpeeds?: string[];
    availableProviders?: string[];
    locationCode?: string;
    locationName?: string;
    region?: string;
}
