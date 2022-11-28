import { SpeakeasyBase } from "../../../internal/utils";
import { KmsKeyDetails } from "./kmskeydetails";
import { ProviderTypeEnum } from "./providertypeenum";
import { S3RepositoryDetails } from "./s3repositorydetails";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";
/**
 * Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html"> <code>DescribeRepositoryAssociation</code> </a> operation returns a <code>RepositoryAssociation</code> object.
**/
export declare class RepositoryAssociation extends SpeakeasyBase {
    associationArn?: string;
    associationId?: string;
    connectionArn?: string;
    createdTimeStamp?: Date;
    kmsKeyDetails?: KmsKeyDetails;
    lastUpdatedTimeStamp?: Date;
    name?: string;
    owner?: string;
    providerType?: ProviderTypeEnum;
    s3RepositoryDetails?: S3RepositoryDetails;
    state?: RepositoryAssociationStateEnum;
    stateReason?: string;
}
