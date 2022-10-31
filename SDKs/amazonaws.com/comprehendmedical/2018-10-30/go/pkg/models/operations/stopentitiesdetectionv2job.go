package operations

import (
	"openapi/pkg/models/shared"
)

type StopEntitiesDetectionV2JobXAmzTargetEnum string

const (
	StopEntitiesDetectionV2JobXAmzTargetEnumComprehendMedical20181030StopEntitiesDetectionV2Job StopEntitiesDetectionV2JobXAmzTargetEnum = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"
)

type StopEntitiesDetectionV2JobHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopEntitiesDetectionV2JobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopEntitiesDetectionV2JobRequest struct {
	Headers StopEntitiesDetectionV2JobHeaders
	Request shared.StopEntitiesDetectionV2JobRequest `request:"mediaType=application/json"`
}

type StopEntitiesDetectionV2JobResponse struct {
	ContentType                        string
	InternalServerException            *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	StopEntitiesDetectionV2JobResponse *shared.StopEntitiesDetectionV2JobResponse
}
