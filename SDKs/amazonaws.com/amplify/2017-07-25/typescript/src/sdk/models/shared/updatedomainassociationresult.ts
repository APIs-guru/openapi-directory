import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAssociation } from "./domainassociation";



// UpdateDomainAssociationResult
/** 
 *  The result structure for the update domain association request. 
**/
export class UpdateDomainAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
