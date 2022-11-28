import { SpeakeasyBase } from "../../../internal/utils";
import { MissionProfileListItem } from "./missionprofilelistitem";
/**
 * <p/>
**/
export declare class ListMissionProfilesResponse extends SpeakeasyBase {
    missionProfileList?: MissionProfileListItem[];
    nextToken?: string;
}
