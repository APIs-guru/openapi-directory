import { SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyLastUsed } from "./accesskeylastused";
/**
 * Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
**/
export declare class GetAccessKeyLastUsedResponse extends SpeakeasyBase {
    accessKeyLastUsed?: AccessKeyLastUsed;
    userName?: string;
}
