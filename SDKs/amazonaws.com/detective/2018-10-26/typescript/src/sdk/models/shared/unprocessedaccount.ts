import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedAccount
/** 
 * A member account that was included in a request but for which the request could not be processed.
**/
export class UnprocessedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
