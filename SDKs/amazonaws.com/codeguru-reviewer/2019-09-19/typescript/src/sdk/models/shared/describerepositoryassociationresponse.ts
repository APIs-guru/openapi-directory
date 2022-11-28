import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryAssociation } from "./repositoryassociation";



export class DescribeRepositoryAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RepositoryAssociation" })
  repositoryAssociation?: RepositoryAssociation;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
