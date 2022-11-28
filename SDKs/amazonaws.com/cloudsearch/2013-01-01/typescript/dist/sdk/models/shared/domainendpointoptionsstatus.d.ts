import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptions } from "./domainendpointoptions";
import { OptionStatus } from "./optionstatus";
/**
 * The configuration and status of the domain's endpoint options.
**/
export declare class DomainEndpointOptionsStatus extends SpeakeasyBase {
    options: DomainEndpointOptions;
    status: OptionStatus;
}
