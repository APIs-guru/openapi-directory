package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitTaskStateChangeXAmzTargetEnum string

const (
	SubmitTaskStateChangeXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitTaskStateChange SubmitTaskStateChangeXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange"
)

type SubmitTaskStateChangeHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SubmitTaskStateChangeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SubmitTaskStateChangeRequest struct {
	Headers SubmitTaskStateChangeHeaders
	Request shared.SubmitTaskStateChangeRequest `request:"mediaType=application/json"`
}

type SubmitTaskStateChangeResponse struct {
	AccessDeniedException         *interface{}
	ClientException               *interface{}
	ContentType                   string
	InvalidParameterException     *interface{}
	ServerException               *interface{}
	StatusCode                    int64
	SubmitTaskStateChangeResponse *shared.SubmitTaskStateChangeResponse
}
