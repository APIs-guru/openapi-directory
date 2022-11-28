import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";



// CreateDomainResponse
/** 
 * The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.
**/
export class CreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainStatus?: DomainStatus;
}
