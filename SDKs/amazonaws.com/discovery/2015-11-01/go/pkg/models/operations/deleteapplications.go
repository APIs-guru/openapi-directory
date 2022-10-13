package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationsXAmzTargetEnum string

const (
	DeleteApplicationsXAmzTargetEnumAwsPoseidonServiceV20151101DeleteApplications DeleteApplicationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DeleteApplications"
)

type DeleteApplicationsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
