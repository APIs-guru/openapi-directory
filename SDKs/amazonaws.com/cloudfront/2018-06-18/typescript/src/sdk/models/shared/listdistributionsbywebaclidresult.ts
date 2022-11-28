import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionList } from "./distributionlist";



// ListDistributionsByWebAclIdResult
/** 
 * The response to a request to list the distributions that are associated with a specified AWS WAF web ACL. 
**/
export class ListDistributionsByWebAclIdResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionList?: DistributionList;
}
