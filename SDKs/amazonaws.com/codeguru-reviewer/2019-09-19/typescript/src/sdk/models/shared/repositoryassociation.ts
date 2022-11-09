import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsKeyDetails } from "./kmskeydetails";
import { ProviderTypeEnum } from "./providertypeenum";
import { S3RepositoryDetails } from "./s3repositorydetails";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";


// RepositoryAssociation
/** 
 * Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html"> <code>DescribeRepositoryAssociation</code> </a> operation returns a <code>RepositoryAssociation</code> object.
**/
export class RepositoryAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationArn" })
  associationArn?: string;

  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @Metadata({ data: "json, name=KMSKeyDetails" })
  kmsKeyDetails?: KmsKeyDetails;

  @Metadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @Metadata({ data: "json, name=S3RepositoryDetails" })
  s3RepositoryDetails?: S3RepositoryDetails;

  @Metadata({ data: "json, name=State" })
  state?: RepositoryAssociationStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
