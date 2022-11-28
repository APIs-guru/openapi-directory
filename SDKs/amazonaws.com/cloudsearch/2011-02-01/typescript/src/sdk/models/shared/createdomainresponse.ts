import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";



// CreateDomainResponse
/** 
 * A response message that contains the status of a newly created domain.
**/
export class CreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainStatus?: DomainStatus;
}
