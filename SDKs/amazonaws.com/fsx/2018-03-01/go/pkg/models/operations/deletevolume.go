package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVolumeXAmzTargetEnum string

const (
	DeleteVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteVolume DeleteVolumeXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DeleteVolume"
)

type DeleteVolumeHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVolumeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteVolumeRequest struct {
	Headers DeleteVolumeHeaders
	Request shared.DeleteVolumeRequest `request:"mediaType=application/json"`
}

type DeleteVolumeResponse struct {
	BadRequest                 *interface{}
	ContentType                string
	DeleteVolumeResponse       *shared.DeleteVolumeResponse
	IncompatibleParameterError *interface{}
	InternalServerError        *interface{}
	StatusCode                 int64
	VolumeNotFound             *interface{}
}
