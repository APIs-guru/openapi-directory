package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationsXAmzTargetEnum string

const (
	DeleteApplicationsXAmzTargetEnumAwsPoseidonServiceV20151101DeleteApplications DeleteApplicationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DeleteApplications"
)

type DeleteApplicationsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteApplicationsRequest struct {
	Headers DeleteApplicationsHeaders
	Request shared.DeleteApplicationsRequest `request:"mediaType=application/json"`
}

type DeleteApplicationsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	DeleteApplicationsResponse     map[string]interface{}
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
