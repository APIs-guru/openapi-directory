import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SatelliteListItem } from "./satellitelistitem";
/**
 * <p/>
**/
export declare class ListSatellitesResponse extends SpeakeasyBase {
    nextToken?: string;
    satellites?: SatelliteListItem[];
}
