import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MissionProfileListItem } from "./missionprofilelistitem";
/**
 * <p/>
**/
export declare class ListMissionProfilesResponse extends SpeakeasyBase {
    missionProfileList?: MissionProfileListItem[];
    nextToken?: string;
}
