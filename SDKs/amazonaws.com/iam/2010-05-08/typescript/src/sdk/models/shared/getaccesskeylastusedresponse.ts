import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyLastUsed } from "./accesskeylastused";



// GetAccessKeyLastUsedResponse
/** 
 * Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
**/
export class GetAccessKeyLastUsedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessKeyLastUsed?: AccessKeyLastUsed;

  @SpeakeasyMetadata()
  userName?: string;
}
