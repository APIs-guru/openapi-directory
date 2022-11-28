import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";



// CacheSecurityGroup
/** 
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
**/
export class CacheSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  cacheSecurityGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: Ec2SecurityGroup })
  ec2SecurityGroups?: Ec2SecurityGroup[];

  @SpeakeasyMetadata()
  ownerId?: string;
}
