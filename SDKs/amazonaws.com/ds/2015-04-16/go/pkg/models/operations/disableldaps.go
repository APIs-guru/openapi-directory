package operations

import (
	"openapi/pkg/models/shared"
)

type DisableLdapsxAmzTargetEnum string

const (
	DisableLdapsxAmzTargetEnumDirectoryService20150416DisableLdaps DisableLdapsxAmzTargetEnum = "DirectoryService_20150416.DisableLDAPS"
)

type DisableLdapsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableLdapsxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableLdapsRequest struct {
	Headers DisableLdapsHeaders
	Request shared.DisableLdapsRequest `request:"mediaType=application/json"`
}

type DisableLdapsResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DirectoryDoesNotExistException *interface{}
	DirectoryUnavailableException  *interface{}
	DisableLdapsResult             map[string]interface{}
	InvalidLdapsStatusException    *interface{}
	InvalidParameterException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
