package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNumberOfDomainControllersXAmzTargetEnum string

const (
	UpdateNumberOfDomainControllersXAmzTargetEnumDirectoryService20150416UpdateNumberOfDomainControllers UpdateNumberOfDomainControllersXAmzTargetEnum = "DirectoryService_20150416.UpdateNumberOfDomainControllers"
)

type UpdateNumberOfDomainControllersHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateNumberOfDomainControllersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateNumberOfDomainControllersRequest struct {
	Headers UpdateNumberOfDomainControllersHeaders
	Request shared.UpdateNumberOfDomainControllersRequest `request:"mediaType=application/json"`
}

type UpdateNumberOfDomainControllersResponse struct {
	ClientException                        *interface{}
	ContentType                            string
	DirectoryUnavailableException          *interface{}
	DomainControllerLimitExceededException *interface{}
	EntityDoesNotExistException            *interface{}
	InvalidParameterException              *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	UnsupportedOperationException          *interface{}
	UpdateNumberOfDomainControllersResult  map[string]interface{}
}
