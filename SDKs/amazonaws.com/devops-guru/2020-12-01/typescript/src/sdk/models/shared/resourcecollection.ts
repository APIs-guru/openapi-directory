import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudFormationCollection } from "./cloudformationcollection";


// ResourceCollection
/** 
 *  A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
**/
export class ResourceCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFormation" })
  cloudFormation?: CloudFormationCollection;
}
