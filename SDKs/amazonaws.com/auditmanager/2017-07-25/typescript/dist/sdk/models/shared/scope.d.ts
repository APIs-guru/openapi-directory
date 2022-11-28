import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAccount } from "./awsaccount";
import { AwsService } from "./awsservice";
/**
 *  The wrapper that contains the accounts and services in scope for the assessment.
**/
export declare class Scope extends SpeakeasyBase {
    awsAccounts?: AwsAccount[];
    awsServices?: AwsService[];
}
