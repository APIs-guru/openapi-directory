import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainAssociation } from "./domainassociation";


// UpdateDomainAssociationResult
/** 
 *  The result structure for the update domain association request. 
**/
export class UpdateDomainAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
