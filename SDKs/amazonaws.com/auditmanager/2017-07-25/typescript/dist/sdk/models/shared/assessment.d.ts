import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAccount } from "./awsaccount";
import { AssessmentFramework } from "./assessmentframework";
import { AssessmentMetadata } from "./assessmentmetadata";
/**
 *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
**/
export declare class Assessment extends SpeakeasyBase {
    arn?: string;
    awsAccount?: AwsAccount;
    framework?: AssessmentFramework;
    metadata?: AssessmentMetadata;
    tags?: Map<string, string>;
}
