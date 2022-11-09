import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryAssociationSummary } from "./repositoryassociationsummary";
export declare class ListRepositoryAssociationsResponse extends SpeakeasyBase {
    nextToken?: string;
    repositoryAssociationSummaries?: RepositoryAssociationSummary[];
}
