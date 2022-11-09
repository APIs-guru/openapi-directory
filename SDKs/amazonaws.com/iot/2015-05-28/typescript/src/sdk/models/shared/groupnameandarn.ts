import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupNameAndArn
/** 
 * The name and ARN of a group.
**/
export class GroupNameAndArn extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupArn" })
  groupArn?: string;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;
}
