import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { Tag } from "./tag";
/**
 * <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
**/
export declare class User extends SpeakeasyBase {
    arn: string;
    createDate: Date;
    passwordLastUsed?: Date;
    path: string;
    permissionsBoundary?: AttachedPermissionsBoundary;
    tags?: Tag[];
    userId: string;
    userName: string;
}
