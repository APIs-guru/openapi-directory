import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Group
/** 
 * <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  groupId: string;

  @SpeakeasyMetadata()
  groupName: string;

  @SpeakeasyMetadata()
  path: string;
}
