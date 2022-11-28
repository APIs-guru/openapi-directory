import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
import { Tag } from "./tag";
/**
 * <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
**/
export declare class InstanceProfile extends SpeakeasyBase {
    arn: string;
    createDate: Date;
    instanceProfileId: string;
    instanceProfileName: string;
    path: string;
    roles: Role[];
    tags?: Tag[];
}
