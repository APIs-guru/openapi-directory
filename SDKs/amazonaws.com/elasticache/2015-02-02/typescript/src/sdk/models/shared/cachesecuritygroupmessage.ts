import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroup } from "./cachesecuritygroup";



// CacheSecurityGroupMessage
/** 
 * Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
**/
export class CacheSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheSecurityGroup })
  cacheSecurityGroups?: CacheSecurityGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
