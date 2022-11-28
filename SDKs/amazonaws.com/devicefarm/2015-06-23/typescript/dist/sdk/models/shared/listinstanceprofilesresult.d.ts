import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";
export declare class ListInstanceProfilesResult extends SpeakeasyBase {
    instanceProfiles?: InstanceProfile[];
    nextToken?: string;
}
