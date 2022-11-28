import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";



// DescribeDomainsResponse
/** 
 * The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
**/
export class DescribeDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DomainStatus })
  domainStatusList: DomainStatus[];
}
