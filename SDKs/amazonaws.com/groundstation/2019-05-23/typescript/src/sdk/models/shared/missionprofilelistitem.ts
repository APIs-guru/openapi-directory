import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MissionProfileListItem
/** 
 * Item in a list of mission profiles.
**/
export class MissionProfileListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=missionProfileArn" })
  missionProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=missionProfileId" })
  missionProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
