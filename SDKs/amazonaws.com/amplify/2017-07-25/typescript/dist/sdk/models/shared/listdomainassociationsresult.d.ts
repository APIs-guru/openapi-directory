import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainAssociation } from "./domainassociation";
/**
 *  The result structure for the list domain association request.
**/
export declare class ListDomainAssociationsResult extends SpeakeasyBase {
    domainAssociations: DomainAssociation[];
    nextToken?: string;
}
