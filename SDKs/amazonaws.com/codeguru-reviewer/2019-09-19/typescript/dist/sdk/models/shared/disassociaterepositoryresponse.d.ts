import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryAssociation } from "./repositoryassociation";
export declare class DisassociateRepositoryResponse extends SpeakeasyBase {
    repositoryAssociation?: RepositoryAssociation;
    tags?: Map<string, string>;
}
