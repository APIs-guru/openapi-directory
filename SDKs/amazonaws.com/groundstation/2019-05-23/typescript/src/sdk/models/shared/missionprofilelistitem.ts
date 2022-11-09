import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MissionProfileListItem
/** 
 * Item in a list of mission profiles.
**/
export class MissionProfileListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=missionProfileArn" })
  missionProfileArn?: string;

  @Metadata({ data: "json, name=missionProfileId" })
  missionProfileId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
