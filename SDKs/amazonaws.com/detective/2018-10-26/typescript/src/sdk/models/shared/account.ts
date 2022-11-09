import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Account
/** 
 * An AWS account that is the administrator account of or a member of a behavior graph.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;
}
