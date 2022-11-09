import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsAccount
/** 
 *  The wrapper of account details, such as account ID, email address, and so on. 
**/
export class AwsAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
