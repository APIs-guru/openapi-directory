package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVolumeXAmzTargetEnum string

const (
	DeleteVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteVolume DeleteVolumeXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DeleteVolume"
)

type DeleteVolumeHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVolumeXAmzTargetEnum `header:"name=X-Amz-Target"`
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
