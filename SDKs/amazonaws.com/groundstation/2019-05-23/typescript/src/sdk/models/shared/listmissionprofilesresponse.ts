import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MissionProfileListItem } from "./missionprofilelistitem";



// ListMissionProfilesResponse
/** 
 * <p/>
**/
export class ListMissionProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=missionProfileList", elemType: MissionProfileListItem })
  missionProfileList?: MissionProfileListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
