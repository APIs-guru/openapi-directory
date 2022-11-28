import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";
/**
 * Contains the response to a successful <a>ListInstanceProfiles</a> request.
**/
export declare class ListInstanceProfilesResponse extends SpeakeasyBase {
    instanceProfiles: InstanceProfile[];
    isTruncated?: boolean;
    marker?: string;
}
