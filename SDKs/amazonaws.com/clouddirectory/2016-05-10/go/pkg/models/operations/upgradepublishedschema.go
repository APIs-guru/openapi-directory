package operations

import (
	"openapi/pkg/models/shared"
)

type UpgradePublishedSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpgradePublishedSchemaRequestBody struct {
	DevelopmentSchemaArn string `json:"DevelopmentSchemaArn"`
	DryRun               *bool  `json:"DryRun,omitempty"`
	MinorVersion         string `json:"MinorVersion"`
	PublishedSchemaArn   string `json:"PublishedSchemaArn"`
}

type UpgradePublishedSchemaRequest struct {
	Headers UpgradePublishedSchemaHeaders
	Request UpgradePublishedSchemaRequestBody `request:"mediaType=application/json"`
}

type UpgradePublishedSchemaResponse struct {
	AccessDeniedException          *shared.AccessDeniedException
	ContentType                    string
	IncompatibleSchemaException    *shared.IncompatibleSchemaException
	InternalServiceException       *shared.InternalServiceException
	InvalidArnException            *shared.InvalidArnException
	InvalidAttachmentException     *shared.InvalidAttachmentException
	LimitExceededException         *shared.LimitExceededException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	RetryableConflictException     *shared.RetryableConflictException
	StatusCode                     int64
	UpgradePublishedSchemaResponse *shared.UpgradePublishedSchemaResponse
	ValidationException            *shared.ValidationException
}
