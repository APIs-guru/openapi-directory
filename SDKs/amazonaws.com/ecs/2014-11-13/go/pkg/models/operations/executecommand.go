package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteCommandXAmzTargetEnum string

const (
	ExecuteCommandXAmzTargetEnumAmazonEc2ContainerServiceV20141113ExecuteCommand ExecuteCommandXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ExecuteCommand"
)

type ExecuteCommandHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExecuteCommandXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ExecuteCommandRequest struct {
	Headers ExecuteCommandHeaders
	Request shared.ExecuteCommandRequest `request:"mediaType=application/json"`
}

type ExecuteCommandResponse struct {
	AccessDeniedException       *interface{}
	ClientException             *interface{}
	ClusterNotFoundException    *interface{}
	ContentType                 string
	ExecuteCommandResponse      *shared.ExecuteCommandResponse
	InvalidParameterException   *interface{}
	ServerException             *interface{}
	StatusCode                  int64
	TargetNotConnectedException *interface{}
}
