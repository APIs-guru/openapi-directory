import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAssociation } from "./domainassociation";



export class DeleteDomainAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainAssociation" })
  domainAssociation: DomainAssociation;
}
