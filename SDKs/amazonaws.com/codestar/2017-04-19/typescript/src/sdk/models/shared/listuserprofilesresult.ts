import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserProfileSummary } from "./userprofilesummary";


export class ListUserProfilesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=userProfiles", elemType: shared.UserProfileSummary })
  userProfiles: UserProfileSummary[];
}
