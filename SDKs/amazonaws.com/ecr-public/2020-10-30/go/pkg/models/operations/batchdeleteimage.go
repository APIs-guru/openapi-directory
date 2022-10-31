package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteImageXAmzTargetEnum string

const (
	BatchDeleteImageXAmzTargetEnumSpencerFrontendServiceBatchDeleteImage BatchDeleteImageXAmzTargetEnum = "SpencerFrontendService.BatchDeleteImage"
)

type BatchDeleteImageHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeleteImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchDeleteImageRequest struct {
	Headers BatchDeleteImageHeaders
	Request shared.BatchDeleteImageRequest `request:"mediaType=application/json"`
}

type BatchDeleteImageResponse struct {
	BatchDeleteImageResponse    *shared.BatchDeleteImageResponse
	ContentType                 string
	InvalidParameterException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
