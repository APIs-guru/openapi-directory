package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetImageXAmzTargetEnum string

const (
	BatchGetImageXAmzTargetEnumAmazonEc2ContainerRegistryV20150921BatchGetImage BatchGetImageXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.BatchGetImage"
)

type BatchGetImageHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetImageRequest struct {
	Headers BatchGetImageHeaders
	Request shared.BatchGetImageRequest `request:"mediaType=application/json"`
}

type BatchGetImageResponse struct {
	BatchGetImageResponse       *shared.BatchGetImageResponse
	ContentType                 string
	InvalidParameterException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
