import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
**/
export declare class CacheSecurityGroup extends SpeakeasyBase {
    arn?: string;
    cacheSecurityGroupName?: string;
    description?: string;
    ec2SecurityGroups?: Ec2SecurityGroup[];
    ownerId?: string;
}
