import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryAssociationSummary } from "./repositoryassociationsummary";


export class ListRepositoryAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RepositoryAssociationSummaries", elemType: shared.RepositoryAssociationSummary })
  repositoryAssociationSummaries?: RepositoryAssociationSummary[];
}
