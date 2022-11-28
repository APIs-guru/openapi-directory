import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAssociation } from "./domainassociation";



// GetDomainAssociationResult
/** 
 *  The result structure for the get domain association request. 
**/
export class GetDomainAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
