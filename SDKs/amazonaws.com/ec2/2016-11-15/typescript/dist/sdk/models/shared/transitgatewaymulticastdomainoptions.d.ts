import { SpeakeasyBase } from "../../../internal/utils";
import { AutoAcceptSharedAssociationsValueEnum } from "./autoacceptsharedassociationsvalueenum";
import { Igmpv2SupportValueEnum } from "./igmpv2supportvalueenum";
import { StaticSourcesSupportValueEnum } from "./staticsourcessupportvalueenum";
/**
 * Describes the options for a transit gateway multicast domain.
**/
export declare class TransitGatewayMulticastDomainOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValueEnum;
    igmpv2Support?: Igmpv2SupportValueEnum;
    staticSourcesSupport?: StaticSourcesSupportValueEnum;
}
