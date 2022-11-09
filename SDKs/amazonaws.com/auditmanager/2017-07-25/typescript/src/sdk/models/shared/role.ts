import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleTypeEnum } from "./roletypeenum";


// Role
/** 
 *  The wrapper that contains the Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN). 
**/
export class Role extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=roleType" })
  roleType?: RoleTypeEnum;
}
