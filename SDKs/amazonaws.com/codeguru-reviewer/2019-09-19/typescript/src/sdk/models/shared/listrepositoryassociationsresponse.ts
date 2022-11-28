import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryAssociationSummary } from "./repositoryassociationsummary";



export class ListRepositoryAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryAssociationSummaries", elemType: RepositoryAssociationSummary })
  repositoryAssociationSummaries?: RepositoryAssociationSummary[];
}
