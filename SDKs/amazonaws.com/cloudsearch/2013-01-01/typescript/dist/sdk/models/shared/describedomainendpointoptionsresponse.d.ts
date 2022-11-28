import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptionsStatus } from "./domainendpointoptionsstatus";
/**
 * The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options.
**/
export declare class DescribeDomainEndpointOptionsResponse extends SpeakeasyBase {
    domainEndpointOptions?: DomainEndpointOptionsStatus;
}
