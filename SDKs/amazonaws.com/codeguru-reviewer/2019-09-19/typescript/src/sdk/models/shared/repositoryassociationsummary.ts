import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";



// RepositoryAssociationSummary
/** 
 * Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.
**/
export class RepositoryAssociationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationArn" })
  associationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: RepositoryAssociationStateEnum;
}
