import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsAccount } from "./awsaccount";
import { AwsService } from "./awsservice";


// Scope
/** 
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
export class Scope extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsAccounts", elemType: shared.AwsAccount })
  awsAccounts?: AwsAccount[];

  @Metadata({ data: "json, name=awsServices", elemType: shared.AwsService })
  awsServices?: AwsService[];
}
