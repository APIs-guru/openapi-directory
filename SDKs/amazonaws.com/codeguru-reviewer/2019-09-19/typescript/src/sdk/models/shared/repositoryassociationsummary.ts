import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";


// RepositoryAssociationSummary
/** 
 * Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.
**/
export class RepositoryAssociationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationArn" })
  associationArn?: string;

  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @Metadata({ data: "json, name=State" })
  state?: RepositoryAssociationStateEnum;
}
