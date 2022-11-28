import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsAccount
/** 
 *  The wrapper of account details, such as account ID, email address, and so on. 
**/
export class AwsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
