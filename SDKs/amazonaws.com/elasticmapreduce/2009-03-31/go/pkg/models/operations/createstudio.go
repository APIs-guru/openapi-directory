package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioXAmzTargetEnum string

const (
	CreateStudioXAmzTargetEnumElasticMapReduceCreateStudio CreateStudioXAmzTargetEnum = "ElasticMapReduce.CreateStudio"
)

type CreateStudioHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStudioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateStudioRequest struct {
	Headers CreateStudioHeaders
	Request shared.CreateStudioInput `request:"mediaType=application/json"`
}

type CreateStudioResponse struct {
	ContentType             string
	CreateStudioOutput      *shared.CreateStudioOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
