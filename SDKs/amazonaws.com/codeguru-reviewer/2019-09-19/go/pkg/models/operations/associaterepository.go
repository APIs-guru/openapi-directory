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

type AssociateRepositoryRequestBodyKmsKeyDetails struct {
	EncryptionOption *shared.EncryptionOptionEnum `json:"EncryptionOption,omitempty"`
	KmsKeyID         *string                      `json:"KMSKeyId,omitempty"`
}

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
