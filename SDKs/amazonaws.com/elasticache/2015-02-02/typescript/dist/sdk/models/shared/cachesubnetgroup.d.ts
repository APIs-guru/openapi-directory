import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
**/
export declare class CacheSubnetGroup extends SpeakeasyBase {
    arn?: string;
    cacheSubnetGroupDescription?: string;
    cacheSubnetGroupName?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
