package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsToResourceXAmzTargetEnum string

const (
	AddTagsToResourceXAmzTargetEnumAmazonDmSv20160101AddTagsToResource AddTagsToResourceXAmzTargetEnum = "AmazonDMSv20160101.AddTagsToResource"
)

type AddTagsToResourceHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsToResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
