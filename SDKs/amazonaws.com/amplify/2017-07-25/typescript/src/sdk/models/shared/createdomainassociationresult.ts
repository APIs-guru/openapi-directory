import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainAssociation } from "./domainassociation";


// CreateDomainAssociationResult
/** 
 *  The result structure for the create domain association request. 
**/
export class CreateDomainAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
