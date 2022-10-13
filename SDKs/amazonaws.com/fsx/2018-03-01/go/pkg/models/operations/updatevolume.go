package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVolumeXAmzTargetEnum string

const (
	UpdateVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateVolume UpdateVolumeXAmzTargetEnum = "AWSSimbaAPIService_v20180301.UpdateVolume"
)

type UpdateVolumeHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateVolumeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateVolumeRequest struct {
	Headers UpdateVolumeHeaders
	Request shared.UpdateVolumeRequest `request:"mediaType=application/json"`
}

type UpdateVolumeResponse struct {
	BadRequest                 *interface{}
	ContentType                string
	IncompatibleParameterError *interface{}
	InternalServerError        *interface{}
	MissingVolumeConfiguration *interface{}
	StatusCode                 int64
	UpdateVolumeResponse       *shared.UpdateVolumeResponse
	VolumeNotFound             *interface{}
}
