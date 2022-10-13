package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventSelectorsXAmzTargetEnum string

const (
	GetEventSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors GetEventSelectorsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors"
)

type GetEventSelectorsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEventSelectorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEventSelectorsRequest struct {
	Headers GetEventSelectorsHeaders
	Request shared.GetEventSelectorsRequest `request:"mediaType=application/json"`
}

type GetEventSelectorsResponse struct {
	ContentType                    string
	GetEventSelectorsResponse      *shared.GetEventSelectorsResponse
	InvalidTrailNameException      *interface{}
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	TrailNotFoundException         *interface{}
	UnsupportedOperationException  *interface{}
}
