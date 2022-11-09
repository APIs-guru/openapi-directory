import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroundStationData } from "./groundstationdata";
/**
 * <p/>
**/
export declare class ListGroundStationsResponse extends SpeakeasyBase {
    groundStationList?: GroundStationData[];
    nextToken?: string;
}
