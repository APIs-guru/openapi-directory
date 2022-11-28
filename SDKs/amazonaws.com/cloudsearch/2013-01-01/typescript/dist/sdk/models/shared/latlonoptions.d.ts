import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
**/
export declare class LatLonOptions extends SpeakeasyBase {
    defaultValue?: string;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sortEnabled?: boolean;
    sourceField?: string;
}
