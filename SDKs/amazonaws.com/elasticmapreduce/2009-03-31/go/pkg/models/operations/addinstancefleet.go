package operations

import (
	"openapi/pkg/models/shared"
)

type AddInstanceFleetXAmzTargetEnum string

const (
	AddInstanceFleetXAmzTargetEnumElasticMapReduceAddInstanceFleet AddInstanceFleetXAmzTargetEnum = "ElasticMapReduce.AddInstanceFleet"
)

type AddInstanceFleetHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddInstanceFleetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddInstanceFleetRequest struct {
	Headers AddInstanceFleetHeaders
	Request shared.AddInstanceFleetInput `request:"mediaType=application/json"`
}

type AddInstanceFleetResponse struct {
	AddInstanceFleetOutput  *shared.AddInstanceFleetOutput
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
