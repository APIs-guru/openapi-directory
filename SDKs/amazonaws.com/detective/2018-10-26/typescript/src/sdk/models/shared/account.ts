import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Account
/** 
 * An AWS account that is the administrator account of or a member of a behavior graph.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress: string;
}
