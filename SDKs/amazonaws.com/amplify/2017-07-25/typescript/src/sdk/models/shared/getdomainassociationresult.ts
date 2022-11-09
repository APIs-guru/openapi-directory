import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainAssociation } from "./domainassociation";


// GetDomainAssociationResult
/** 
 *  The result structure for the get domain association request. 
**/
export class GetDomainAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
