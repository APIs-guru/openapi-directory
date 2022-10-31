package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMatchmakingXAmzTargetEnum string

const (
	DescribeMatchmakingXAmzTargetEnumGameLiftDescribeMatchmaking DescribeMatchmakingXAmzTargetEnum = "GameLift.DescribeMatchmaking"
)

type DescribeMatchmakingHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMatchmakingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMatchmakingRequest struct {
	Headers DescribeMatchmakingHeaders
	Request shared.DescribeMatchmakingInput `request:"mediaType=application/json"`
}

type DescribeMatchmakingResponse struct {
	ContentType                string
	DescribeMatchmakingOutput  *shared.DescribeMatchmakingOutput
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	StatusCode                 int64
	UnsupportedRegionException *interface{}
}
