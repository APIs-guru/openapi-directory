package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateRepositoryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateRepositoryRequestBodyKmsKeyDetails struct {
	EncryptionOption *shared.EncryptionOptionEnum `json:"EncryptionOption"`
	KmsKeyID         *string                      `json:"KMSKeyId"`
}

type AssociateRepositoryRequestBodyRepository struct {
	Bitbucket              *shared.ThirdPartySourceRepository `json:"Bitbucket"`
	CodeCommit             *shared.CodeCommitRepository       `json:"CodeCommit"`
	GitHubEnterpriseServer *shared.ThirdPartySourceRepository `json:"GitHubEnterpriseServer"`
	S3Bucket               *shared.S3Repository               `json:"S3Bucket"`
}

type AssociateRepositoryRequestBody struct {
	ClientRequestToken *string                                      `json:"ClientRequestToken"`
	KmsKeyDetails      *AssociateRepositoryRequestBodyKmsKeyDetails `json:"KMSKeyDetails"`
	Repository         AssociateRepositoryRequestBodyRepository     `json:"Repository"`
	Tags               map[string]string                            `json:"Tags"`
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
