import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssociateRepositoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// AssociateRepositoryRequestBodyKmsKeyDetails
/** 
 * <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
**/
export class AssociateRepositoryRequestBodyKmsKeyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionOption" })
  encryptionOption?: shared.EncryptionOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyId" })
  kmsKeyId?: string;
}


// AssociateRepositoryRequestBodyRepository
/** 
 *  Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. 
**/
export class AssociateRepositoryRequestBodyRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bitbucket" })
  bitbucket?: shared.ThirdPartySourceRepository;

  @SpeakeasyMetadata({ data: "json, name=CodeCommit" })
  codeCommit?: shared.CodeCommitRepository;

  @SpeakeasyMetadata({ data: "json, name=GitHubEnterpriseServer" })
  gitHubEnterpriseServer?: shared.ThirdPartySourceRepository;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: shared.S3Repository;
}


export class AssociateRepositoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyDetails" })
  kmsKeyDetails?: AssociateRepositoryRequestBodyKmsKeyDetails;

  @SpeakeasyMetadata({ data: "json, name=Repository" })
  repository: AssociateRepositoryRequestBodyRepository;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class AssociateRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateRepositoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssociateRepositoryRequestBody;
}


export class AssociateRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  associateRepositoryResponse?: shared.AssociateRepositoryResponse;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
