import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnprocessedAccount
/** 
 * A member account that was included in a request but for which the request could not be processed.
**/
export class UnprocessedAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
