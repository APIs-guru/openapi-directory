import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptionsStatus } from "./domainendpointoptionsstatus";
/**
 * The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options.
**/
export declare class UpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
    domainEndpointOptions?: DomainEndpointOptionsStatus;
}
