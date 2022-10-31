package operations

import (
	"openapi/pkg/models/shared"
)

type UpgradeAppliedSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpgradeAppliedSchemaRequestBody struct {
	DirectoryArn       string `json:"DirectoryArn"`
	DryRun             *bool  `json:"DryRun,omitempty"`
	PublishedSchemaArn string `json:"PublishedSchemaArn"`
}

type UpgradeAppliedSchemaRequest struct {
	Headers UpgradeAppliedSchemaHeaders
	Request UpgradeAppliedSchemaRequestBody `request:"mediaType=application/json"`
}

type UpgradeAppliedSchemaResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	IncompatibleSchemaException  *shared.IncompatibleSchemaException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	InvalidAttachmentException   *shared.InvalidAttachmentException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	UpgradeAppliedSchemaResponse *shared.UpgradeAppliedSchemaResponse
	ValidationException          *shared.ValidationException
}
