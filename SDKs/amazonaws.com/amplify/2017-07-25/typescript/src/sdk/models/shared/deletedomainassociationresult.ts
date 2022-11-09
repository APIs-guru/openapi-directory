import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainAssociation } from "./domainassociation";


export class DeleteDomainAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
