import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptionsStatus } from "./domainendpointoptionsstatus";



// UpdateDomainEndpointOptionsResponse
/** 
 * The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. 
**/
export class UpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainEndpointOptions?: DomainEndpointOptionsStatus;
}
