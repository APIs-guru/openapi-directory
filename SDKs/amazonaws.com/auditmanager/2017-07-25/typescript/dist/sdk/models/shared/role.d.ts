import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleTypeEnum } from "./roletypeenum";
/**
 *  The wrapper that contains the Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN).
**/
export declare class Role extends SpeakeasyBase {
    roleArn?: string;
    roleType?: RoleTypeEnum;
}
