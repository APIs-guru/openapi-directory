package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagsXAmzTargetEnum string

const (
	DeleteTagsXAmzTargetEnumAwsPoseidonServiceV20151101DeleteTags DeleteTagsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DeleteTags"
)

type DeleteTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTagsRequest struct {
	Headers DeleteTagsHeaders
	Request shared.DeleteTagsRequest `request:"mediaType=application/json"`
}

type DeleteTagsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	DeleteTagsResponse             map[string]interface{}
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
