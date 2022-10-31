package operations

import (
	"openapi/pkg/models/shared"
)

type ListEntitiesDetectionV2JobsXAmzTargetEnum string

const (
	ListEntitiesDetectionV2JobsXAmzTargetEnumComprehendMedical20181030ListEntitiesDetectionV2Jobs ListEntitiesDetectionV2JobsXAmzTargetEnum = "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs"
)

type ListEntitiesDetectionV2JobsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEntitiesDetectionV2JobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListEntitiesDetectionV2JobsRequest struct {
	Headers ListEntitiesDetectionV2JobsHeaders
	Request shared.ListEntitiesDetectionV2JobsRequest `request:"mediaType=application/json"`
}

type ListEntitiesDetectionV2JobsResponse struct {
	ContentType                         string
	InternalServerException             *interface{}
	InvalidRequestException             *interface{}
	ListEntitiesDetectionV2JobsResponse *shared.ListEntitiesDetectionV2JobsResponse
	StatusCode                          int64
	TooManyRequestsException            *interface{}
	ValidationException                 *interface{}
}
