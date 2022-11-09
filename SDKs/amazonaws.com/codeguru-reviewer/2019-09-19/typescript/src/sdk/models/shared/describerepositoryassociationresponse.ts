import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryAssociation } from "./repositoryassociation";


export class DescribeRepositoryAssociationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RepositoryAssociation" })
  repositoryAssociation?: RepositoryAssociation;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
