import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAssociation } from "./domainassociation";



// ListDomainAssociationsResult
/** 
 *  The result structure for the list domain association request. 
**/
export class ListDomainAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainAssociations", elemType: DomainAssociation })
  domainAssociations: DomainAssociation[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
