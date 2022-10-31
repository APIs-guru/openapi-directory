package operations

import (
	"openapi/pkg/models/shared"
)

type PutConformancePackXAmzTargetEnum string

const (
	PutConformancePackXAmzTargetEnumStarlingDoveServicePutConformancePack PutConformancePackXAmzTargetEnum = "StarlingDoveService.PutConformancePack"
)

type PutConformancePackHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutConformancePackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutConformancePackRequest struct {
	Headers PutConformancePackHeaders
	Request shared.PutConformancePackRequest `request:"mediaType=application/json"`
}

type PutConformancePackResponse struct {
	ConformancePackTemplateValidationException   *interface{}
	ContentType                                  string
	InsufficientPermissionsException             *interface{}
	InvalidParameterValueException               *interface{}
	MaxNumberOfConformancePacksExceededException *interface{}
	PutConformancePackResponse                   *shared.PutConformancePackResponse
	ResourceInUseException                       *interface{}
	StatusCode                                   int64
}
