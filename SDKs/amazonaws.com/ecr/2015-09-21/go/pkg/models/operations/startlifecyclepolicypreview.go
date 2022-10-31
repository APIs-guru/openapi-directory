package operations

import (
	"openapi/pkg/models/shared"
)

type StartLifecyclePolicyPreviewXAmzTargetEnum string

const (
	StartLifecyclePolicyPreviewXAmzTargetEnumAmazonEc2ContainerRegistryV20150921StartLifecyclePolicyPreview StartLifecyclePolicyPreviewXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview"
)

type StartLifecyclePolicyPreviewHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartLifecyclePolicyPreviewXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartLifecyclePolicyPreviewRequest struct {
	Headers StartLifecyclePolicyPreviewHeaders
	Request shared.StartLifecyclePolicyPreviewRequest `request:"mediaType=application/json"`
}

type StartLifecyclePolicyPreviewResponse struct {
	ContentType                               string
	InvalidParameterException                 *interface{}
	LifecyclePolicyNotFoundException          *interface{}
	LifecyclePolicyPreviewInProgressException *interface{}
	RepositoryNotFoundException               *interface{}
	ServerException                           *interface{}
	StartLifecyclePolicyPreviewResponse       *shared.StartLifecyclePolicyPreviewResponse
	StatusCode                                int64
}
