package operations

import (
	"openapi/pkg/models/shared"
)

type StopTaskXAmzTargetEnum string

const (
	StopTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113StopTask StopTaskXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.StopTask"
)

type StopTaskHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopTaskRequest struct {
	Headers StopTaskHeaders
	Request shared.StopTaskRequest `request:"mediaType=application/json"`
}

type StopTaskResponse struct {
	ClientException           *interface{}
	ClusterNotFoundException  *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ServerException           *interface{}
	StatusCode                int64
	StopTaskResponse          *shared.StopTaskResponse
}
