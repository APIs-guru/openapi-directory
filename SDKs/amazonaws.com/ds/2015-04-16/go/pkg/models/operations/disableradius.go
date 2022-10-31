package operations

import (
	"openapi/pkg/models/shared"
)

type DisableRadiusXAmzTargetEnum string

const (
	DisableRadiusXAmzTargetEnumDirectoryService20150416DisableRadius DisableRadiusXAmzTargetEnum = "DirectoryService_20150416.DisableRadius"
)

type DisableRadiusHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableRadiusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisableRadiusRequest struct {
	Headers DisableRadiusHeaders
	Request shared.DisableRadiusRequest `request:"mediaType=application/json"`
}

type DisableRadiusResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DisableRadiusResult         map[string]interface{}
	EntityDoesNotExistException *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
