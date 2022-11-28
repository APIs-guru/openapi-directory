import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsKeyDetails } from "./kmskeydetails";
import { ProviderTypeEnum } from "./providertypeenum";
import { S3RepositoryDetails } from "./s3repositorydetails";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";



// RepositoryAssociation
/** 
 * Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html"> <code>DescribeRepositoryAssociation</code> </a> operation returns a <code>RepositoryAssociation</code> object.
**/
export class RepositoryAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationArn" })
  associationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyDetails" })
  kmsKeyDetails?: KmsKeyDetails;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3RepositoryDetails" })
  s3RepositoryDetails?: S3RepositoryDetails;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: RepositoryAssociationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
