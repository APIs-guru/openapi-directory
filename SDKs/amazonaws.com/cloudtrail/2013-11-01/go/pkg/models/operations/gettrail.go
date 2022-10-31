package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrailXAmzTargetEnum string

const (
	GetTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail GetTrailXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail"
)

type GetTrailHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTrailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTrailRequest struct {
	Headers GetTrailHeaders
	Request shared.GetTrailRequest `request:"mediaType=application/json"`
}

type GetTrailResponse struct {
	ContentType                    string
	GetTrailResponse               *shared.GetTrailResponse
	InvalidTrailNameException      *interface{}
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	TrailNotFoundException         *interface{}
	UnsupportedOperationException  *interface{}
}
