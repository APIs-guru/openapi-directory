import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";



// Role
/** 
 *  The wrapper that contains the Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN). 
**/
export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=roleType" })
  roleType?: RoleTypeEnum;
}
