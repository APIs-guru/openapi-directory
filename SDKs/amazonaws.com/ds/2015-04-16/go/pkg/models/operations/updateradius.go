package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRadiusXAmzTargetEnum string

const (
	UpdateRadiusXAmzTargetEnumDirectoryService20150416UpdateRadius UpdateRadiusXAmzTargetEnum = "DirectoryService_20150416.UpdateRadius"
)

type UpdateRadiusHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRadiusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRadiusRequest struct {
	Headers UpdateRadiusHeaders
	Request shared.UpdateRadiusRequest `request:"mediaType=application/json"`
}

type UpdateRadiusResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
	UpdateRadiusResult          map[string]interface{}
}
