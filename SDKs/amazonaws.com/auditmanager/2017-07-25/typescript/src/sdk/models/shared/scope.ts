import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsAccount } from "./awsaccount";
import { AwsService } from "./awsservice";



// Scope
/** 
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
export class Scope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsAccounts", elemType: AwsAccount })
  awsAccounts?: AwsAccount[];

  @SpeakeasyMetadata({ data: "json, name=awsServices", elemType: AwsService })
  awsServices?: AwsService[];
}
