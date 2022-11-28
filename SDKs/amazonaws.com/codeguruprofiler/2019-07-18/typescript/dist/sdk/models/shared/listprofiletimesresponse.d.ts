import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileTime } from "./profiletime";
/**
 * The structure representing the listProfileTimesResponse.
**/
export declare class ListProfileTimesResponse extends SpeakeasyBase {
    nextToken?: string;
    profileTimes: ProfileTime[];
}
