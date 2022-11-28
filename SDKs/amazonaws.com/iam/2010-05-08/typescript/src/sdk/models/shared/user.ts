import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { Tag } from "./tag";



// User
/** 
 * <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  passwordLastUsed?: Date;

  @SpeakeasyMetadata()
  path: string;

  @SpeakeasyMetadata()
  permissionsBoundary?: AttachedPermissionsBoundary;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  userId: string;

  @SpeakeasyMetadata()
  userName: string;
}
