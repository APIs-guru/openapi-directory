package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromResourceXAmzTargetEnum string

const (
	RemoveTagsFromResourceXAmzTargetEnumAmazonDmSv20160101RemoveTagsFromResource RemoveTagsFromResourceXAmzTargetEnum = "AmazonDMSv20160101.RemoveTagsFromResource"
)

type RemoveTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RemoveTagsFromResourceRequest struct {
	Headers RemoveTagsFromResourceHeaders
	Request shared.RemoveTagsFromResourceMessage `request:"mediaType=application/json"`
}

type RemoveTagsFromResourceResponse struct {
	ContentType                    string
	RemoveTagsFromResourceResponse map[string]interface{}
	ResourceNotFoundFault          *interface{}
	StatusCode                     int64
}
