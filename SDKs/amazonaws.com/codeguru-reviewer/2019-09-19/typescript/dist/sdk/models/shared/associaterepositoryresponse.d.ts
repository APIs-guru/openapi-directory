import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryAssociation } from "./repositoryassociation";
export declare class AssociateRepositoryResponse extends SpeakeasyBase {
    repositoryAssociation?: RepositoryAssociation;
    tags?: Map<string, string>;
}
