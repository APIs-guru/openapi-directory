import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";
/**
 * The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
**/
export declare class DescribeDomainsResponse extends SpeakeasyBase {
    domainStatusList: DomainStatus[];
}
