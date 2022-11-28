import { SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";
export declare class SearchProfilesResponse extends SpeakeasyBase {
    items?: Profile[];
    nextToken?: string;
}
