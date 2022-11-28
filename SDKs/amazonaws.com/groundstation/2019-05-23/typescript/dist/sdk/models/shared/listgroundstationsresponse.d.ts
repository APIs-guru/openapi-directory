import { SpeakeasyBase } from "../../../internal/utils";
import { GroundStationData } from "./groundstationdata";
/**
 * <p/>
**/
export declare class ListGroundStationsResponse extends SpeakeasyBase {
    groundStationList?: GroundStationData[];
    nextToken?: string;
}
