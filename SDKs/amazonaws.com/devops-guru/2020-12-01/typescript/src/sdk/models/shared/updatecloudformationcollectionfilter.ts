import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateCloudFormationCollectionFilter
/** 
 *  Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.
**/
export class UpdateCloudFormationCollectionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackNames" })
  stackNames?: string[];
}
