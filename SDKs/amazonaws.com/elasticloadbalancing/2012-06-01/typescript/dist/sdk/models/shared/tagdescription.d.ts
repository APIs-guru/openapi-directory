import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The tags associated with a load balancer.
**/
export declare class TagDescription extends SpeakeasyBase {
    loadBalancerName?: string;
    tags?: Tag[];
}
