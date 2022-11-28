import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptions } from "./domainendpointoptions";
import { OptionStatus } from "./optionstatus";



// DomainEndpointOptionsStatus
/** 
 * The configuration and status of the domain's endpoint options.
**/
export class DomainEndpointOptionsStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: DomainEndpointOptions;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
