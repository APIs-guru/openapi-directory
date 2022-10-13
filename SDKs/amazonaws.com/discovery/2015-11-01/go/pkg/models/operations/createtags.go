package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagsXAmzTargetEnum string

const (
	CreateTagsXAmzTargetEnumAwsPoseidonServiceV20151101CreateTags CreateTagsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.CreateTags"
)

type CreateTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTagsRequest struct {
	Headers CreateTagsHeaders
	Request shared.CreateTagsRequest `request:"mediaType=application/json"`
}

type CreateTagsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	CreateTagsResponse             map[string]interface{}
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
