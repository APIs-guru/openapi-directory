import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";
/**
 * The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
**/
export declare class DeleteDomainResponse extends SpeakeasyBase {
    domainStatus?: DomainStatus;
}
