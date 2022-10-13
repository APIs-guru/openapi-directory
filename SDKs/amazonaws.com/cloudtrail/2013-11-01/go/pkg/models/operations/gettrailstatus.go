package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrailStatusXAmzTargetEnum string

const (
	GetTrailStatusXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus GetTrailStatusXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
)

type GetTrailStatusHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTrailStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTrailStatusRequest struct {
	Headers GetTrailStatusHeaders
	Request shared.GetTrailStatusRequest `request:"mediaType=application/json"`
}

type GetTrailStatusResponse struct {
	ContentType                    string
	GetTrailStatusResponse         *shared.GetTrailStatusResponse
	InvalidTrailNameException      *interface{}
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	TrailNotFoundException         *interface{}
	UnsupportedOperationException  *interface{}
}
