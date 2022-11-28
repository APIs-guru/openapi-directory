package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateRepositoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// AssociateRepositoryRequestBodyKmsKeyDetails
// <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
type AssociateRepositoryRequestBodyKmsKeyDetails struct {
	EncryptionOption *shared.EncryptionOptionEnum `json:"EncryptionOption,omitempty"`
	KmsKeyID         *string                      `json:"KMSKeyId,omitempty"`
}

// AssociateRepositoryRequestBodyRepository
//
//	Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.
type AssociateRepositoryRequestBodyRepository struct {
	Bitbucket              *shared.ThirdPartySourceRepository `json:"Bitbucket,omitempty"`
	CodeCommit             *shared.CodeCommitRepository       `json:"CodeCommit,omitempty"`
	GitHubEnterpriseServer *shared.ThirdPartySourceRepository `json:"GitHubEnterpriseServer,omitempty"`
	S3Bucket               *shared.S3Repository               `json:"S3Bucket,omitempty"`
}

type AssociateRepositoryRequestBody struct {
	ClientRequestToken *string                                      `json:"ClientRequestToken,omitempty"`
	KmsKeyDetails      *AssociateRepositoryRequestBodyKmsKeyDetails `json:"KMSKeyDetails,omitempty"`
	Repository         AssociateRepositoryRequestBodyRepository     `json:"Repository"`
	Tags               map[string]string                            `json:"Tags,omitempty"`
}

type AssociateRepositoryRequest struct {
	Headers AssociateRepositoryHeaders
	Request AssociateRepositoryRequestBody `request:"mediaType=application/json"`
}

type AssociateRepositoryResponse struct {
	AccessDeniedException       *interface{}
	AssociateRepositoryResponse *shared.AssociateRepositoryResponse
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
