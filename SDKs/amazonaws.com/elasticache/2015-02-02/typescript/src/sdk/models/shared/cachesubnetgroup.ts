import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



// CacheSubnetGroup
/** 
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
**/
export class CacheSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  cacheSubnetGroupDescription?: string;

  @SpeakeasyMetadata()
  cacheSubnetGroupName?: string;

  @SpeakeasyMetadata({ elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
