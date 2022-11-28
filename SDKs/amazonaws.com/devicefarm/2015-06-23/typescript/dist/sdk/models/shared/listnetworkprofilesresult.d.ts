import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfile } from "./networkprofile";
export declare class ListNetworkProfilesResult extends SpeakeasyBase {
    networkProfiles?: NetworkProfile[];
    nextToken?: string;
}
