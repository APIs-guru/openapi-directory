import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupNameAndArn
/** 
 * The name and ARN of a group.
**/
export class GroupNameAndArn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupArn" })
  groupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;
}
