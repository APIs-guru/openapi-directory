import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MissionProfileListItem } from "./missionprofilelistitem";


// ListMissionProfilesResponse
/** 
 * <p/>
**/
export class ListMissionProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=missionProfileList", elemType: shared.MissionProfileListItem })
  missionProfileList?: MissionProfileListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
