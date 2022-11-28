import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssociateRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
**/
export declare class AssociateRepositoryRequestBodyKmsKeyDetails extends SpeakeasyBase {
    encryptionOption?: shared.EncryptionOptionEnum;
    kmsKeyId?: string;
}
/**
 *  Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.
**/
export declare class AssociateRepositoryRequestBodyRepository extends SpeakeasyBase {
    bitbucket?: shared.ThirdPartySourceRepository;
    codeCommit?: shared.CodeCommitRepository;
    gitHubEnterpriseServer?: shared.ThirdPartySourceRepository;
    s3Bucket?: shared.S3Repository;
}
export declare class AssociateRepositoryRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    kmsKeyDetails?: AssociateRepositoryRequestBodyKmsKeyDetails;
    repository: AssociateRepositoryRequestBodyRepository;
    tags?: Map<string, string>;
}
export declare class AssociateRepositoryRequest extends SpeakeasyBase {
    headers: AssociateRepositoryHeaders;
    request: AssociateRepositoryRequestBody;
}
export declare class AssociateRepositoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateRepositoryResponse?: shared.AssociateRepositoryResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
