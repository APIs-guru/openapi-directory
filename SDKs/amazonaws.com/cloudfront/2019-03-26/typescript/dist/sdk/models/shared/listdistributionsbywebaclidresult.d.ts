import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionList } from "./distributionlist";
/**
 * The response to a request to list the distributions that are associated with a specified AWS WAF web ACL.
**/
export declare class ListDistributionsByWebAclIdResult extends SpeakeasyBase {
    distributionList?: DistributionList;
}
