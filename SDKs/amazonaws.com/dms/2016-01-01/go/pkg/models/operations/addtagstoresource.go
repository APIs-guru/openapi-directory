package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsToResourceXAmzTargetEnum string

const (
	AddTagsToResourceXAmzTargetEnumAmazonDmSv20160101AddTagsToResource AddTagsToResourceXAmzTargetEnum = "AmazonDMSv20160101.AddTagsToResource"
)

type AddTagsToResourceHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsToResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddTagsToResourceRequest struct {
	Headers AddTagsToResourceHeaders
	Request shared.AddTagsToResourceMessage `request:"mediaType=application/json"`
}

type AddTagsToResourceResponse struct {
	AddTagsToResourceResponse map[string]interface{}
	ContentType               string
	ResourceNotFoundFault     *interface{}
	StatusCode                int64
}
