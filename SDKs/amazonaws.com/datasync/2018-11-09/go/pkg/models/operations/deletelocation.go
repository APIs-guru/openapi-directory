package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLocationXAmzTargetEnum string

const (
	DeleteLocationXAmzTargetEnumFmrsServiceDeleteLocation DeleteLocationXAmzTargetEnum = "FmrsService.DeleteLocation"
)

type DeleteLocationHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLocationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLocationRequest struct {
	Headers DeleteLocationHeaders
	Request shared.DeleteLocationRequest `request:"mediaType=application/json"`
}

type DeleteLocationResponse struct {
	ContentType             string
	DeleteLocationResponse  map[string]interface{}
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
