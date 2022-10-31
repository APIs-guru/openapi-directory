package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLocationXAmzTargetEnum string

const (
	DeleteLocationXAmzTargetEnumFmrsServiceDeleteLocation DeleteLocationXAmzTargetEnum = "FmrsService.DeleteLocation"
)

type DeleteLocationHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLocationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
