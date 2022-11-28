import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfileSummary } from "./userprofilesummary";



export class ListUserProfilesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userProfiles", elemType: UserProfileSummary })
  userProfiles: UserProfileSummary[];
}
