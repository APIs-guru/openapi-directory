import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptionsStatus } from "./domainendpointoptionsstatus";



// DescribeDomainEndpointOptionsResponse
/** 
 * The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. 
**/
export class DescribeDomainEndpointOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainEndpointOptions?: DomainEndpointOptionsStatus;
}
