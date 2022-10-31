package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEntitiesDetectionV2JobXAmzTargetEnum string

const (
	DescribeEntitiesDetectionV2JobXAmzTargetEnumComprehendMedical20181030DescribeEntitiesDetectionV2Job DescribeEntitiesDetectionV2JobXAmzTargetEnum = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job"
)

type DescribeEntitiesDetectionV2JobHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEntitiesDetectionV2JobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEntitiesDetectionV2JobRequest struct {
	Headers DescribeEntitiesDetectionV2JobHeaders
	Request shared.DescribeEntitiesDetectionV2JobRequest `request:"mediaType=application/json"`
}

type DescribeEntitiesDetectionV2JobResponse struct {
	ContentType                            string
	DescribeEntitiesDetectionV2JobResponse *shared.DescribeEntitiesDetectionV2JobResponse
	InternalServerException                *interface{}
	InvalidRequestException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
