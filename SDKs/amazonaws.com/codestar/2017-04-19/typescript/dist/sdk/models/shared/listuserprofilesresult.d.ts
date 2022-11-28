import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfileSummary } from "./userprofilesummary";
export declare class ListUserProfilesResult extends SpeakeasyBase {
    nextToken?: string;
    userProfiles: UserProfileSummary[];
}
