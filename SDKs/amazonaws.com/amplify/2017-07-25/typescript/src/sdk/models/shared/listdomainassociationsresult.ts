import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainAssociation } from "./domainassociation";


// ListDomainAssociationsResult
/** 
 *  The result structure for the list domain association request. 
**/
export class ListDomainAssociationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainAssociations", elemType: shared.DomainAssociation })
  domainAssociations: DomainAssociation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
