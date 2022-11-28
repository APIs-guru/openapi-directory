import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";
/**
 * Contains the response to a successful <a>ListInstanceProfilesForRole</a> request.
**/
export declare class ListInstanceProfilesForRoleResponse extends SpeakeasyBase {
    instanceProfiles: InstanceProfile[];
    isTruncated?: boolean;
    marker?: string;
}
