import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoAcceptSharedAssociationsValueEnum } from "./autoacceptsharedassociationsvalueenum";
import { Igmpv2SupportValueEnum } from "./igmpv2supportvalueenum";
import { StaticSourcesSupportValueEnum } from "./staticsourcessupportvalueenum";



// TransitGatewayMulticastDomainOptions
/** 
 * Describes the options for a transit gateway multicast domain.
**/
export class TransitGatewayMulticastDomainOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValueEnum;

  @SpeakeasyMetadata()
  igmpv2Support?: Igmpv2SupportValueEnum;

  @SpeakeasyMetadata()
  staticSourcesSupport?: StaticSourcesSupportValueEnum;
}
