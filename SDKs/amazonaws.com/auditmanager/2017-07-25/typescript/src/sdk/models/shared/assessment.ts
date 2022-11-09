import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsAccount } from "./awsaccount";
import { AssessmentFramework } from "./assessmentframework";
import { AssessmentMetadata } from "./assessmentmetadata";


// Assessment
/** 
 *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. 
**/
export class Assessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=awsAccount" })
  awsAccount?: AwsAccount;

  @Metadata({ data: "json, name=framework" })
  framework?: AssessmentFramework;

  @Metadata({ data: "json, name=metadata" })
  metadata?: AssessmentMetadata;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
