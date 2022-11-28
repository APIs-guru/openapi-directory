import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAssociation } from "./domainassociation";



// CreateDomainAssociationResult
/** 
 *  The result structure for the create domain association request. 
**/
export class CreateDomainAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
