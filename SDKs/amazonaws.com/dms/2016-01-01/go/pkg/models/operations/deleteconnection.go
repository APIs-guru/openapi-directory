package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConnectionXAmzTargetEnum string

const (
	DeleteConnectionXAmzTargetEnumAmazonDmSv20160101DeleteConnection DeleteConnectionXAmzTargetEnum = "AmazonDMSv20160101.DeleteConnection"
)

type DeleteConnectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteConnectionRequest struct {
	Headers DeleteConnectionHeaders
	Request shared.DeleteConnectionMessage `request:"mediaType=application/json"`
}

type DeleteConnectionResponse struct {
	AccessDeniedFault         *interface{}
	ContentType               string
	DeleteConnectionResponse  *shared.DeleteConnectionResponse
	InvalidResourceStateFault *interface{}
	ResourceNotFoundFault     *interface{}
	StatusCode                int64
}
