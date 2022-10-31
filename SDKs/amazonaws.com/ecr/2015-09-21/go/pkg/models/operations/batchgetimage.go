package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetImageXAmzTargetEnum string

const (
	BatchGetImageXAmzTargetEnumAmazonEc2ContainerRegistryV20150921BatchGetImage BatchGetImageXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.BatchGetImage"
)

type BatchGetImageHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
