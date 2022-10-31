package operations

import (
	"openapi/pkg/models/shared"
)

type DeauthorizeConnectionXAmzTargetEnum string

const (
	DeauthorizeConnectionXAmzTargetEnumAwsEventsDeauthorizeConnection DeauthorizeConnectionXAmzTargetEnum = "AWSEvents.DeauthorizeConnection"
)

type DeauthorizeConnectionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeauthorizeConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeauthorizeConnectionRequest struct {
	Headers DeauthorizeConnectionHeaders
	Request shared.DeauthorizeConnectionRequest `request:"mediaType=application/json"`
}

type DeauthorizeConnectionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeauthorizeConnectionResponse   *shared.DeauthorizeConnectionResponse
	InternalException               *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
