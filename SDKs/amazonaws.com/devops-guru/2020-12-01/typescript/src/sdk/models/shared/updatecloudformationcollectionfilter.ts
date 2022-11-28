import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateCloudFormationCollectionFilter
/** 
 *  Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.
**/
export class UpdateCloudFormationCollectionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackNames" })
  stackNames?: string[];
}
