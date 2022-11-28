import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";



// DeleteDomainResponse
/** 
 * A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
**/
export class DeleteDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainStatus?: DomainStatus;
}
