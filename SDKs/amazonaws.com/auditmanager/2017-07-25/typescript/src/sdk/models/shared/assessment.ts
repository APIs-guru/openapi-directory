import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsAccount } from "./awsaccount";
import { AssessmentFramework } from "./assessmentframework";
import { AssessmentMetadata } from "./assessmentmetadata";



// Assessment
/** 
 *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. 
**/
export class Assessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=awsAccount" })
  awsAccount?: AwsAccount;

  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: AssessmentFramework;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: AssessmentMetadata;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
