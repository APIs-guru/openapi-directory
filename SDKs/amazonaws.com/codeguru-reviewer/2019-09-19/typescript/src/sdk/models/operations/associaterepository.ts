import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateRepositoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// AssociateRepositoryRequestBodyKmsKeyDetails
/** 
 * <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
**/
export class AssociateRepositoryRequestBodyKmsKeyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionOption" })
  encryptionOption?: shared.EncryptionOptionEnum;

  @Metadata({ data: "json, name=KMSKeyId" })
  kmsKeyId?: string;
}


// AssociateRepositoryRequestBodyRepository
/** 
 *  Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. 
**/
export class AssociateRepositoryRequestBodyRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bitbucket" })
  bitbucket?: shared.ThirdPartySourceRepository;

  @Metadata({ data: "json, name=CodeCommit" })
  codeCommit?: shared.CodeCommitRepository;

  @Metadata({ data: "json, name=GitHubEnterpriseServer" })
  gitHubEnterpriseServer?: shared.ThirdPartySourceRepository;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: shared.S3Repository;
}


export class AssociateRepositoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=KMSKeyDetails" })
  kmsKeyDetails?: AssociateRepositoryRequestBodyKmsKeyDetails;

  @Metadata({ data: "json, name=Repository" })
  repository: AssociateRepositoryRequestBodyRepository;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class AssociateRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateRepositoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateRepositoryRequestBody;
}


export class AssociateRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  associateRepositoryResponse?: shared.AssociateRepositoryResponse;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
