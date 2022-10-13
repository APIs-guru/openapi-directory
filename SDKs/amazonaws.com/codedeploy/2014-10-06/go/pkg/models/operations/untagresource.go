package operations

import (
	"openapi/pkg/models/shared"
)

type UntagResourceXAmzTargetEnum string

const (
	UntagResourceXAmzTargetEnumCodeDeploy20141006UntagResource UntagResourceXAmzTargetEnum = "CodeDeploy_20141006.UntagResource"
)

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request shared.UntagResourceInput `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	ApplicationDoesNotExistException      *interface{}
	ArnNotSupportedException              *interface{}
	ContentType                           string
	DeploymentConfigDoesNotExistException *interface{}
	DeploymentGroupDoesNotExistException  *interface{}
	InvalidArnException                   *interface{}
	InvalidTagsToAddException             *interface{}
	ResourceArnRequiredException          *interface{}
	StatusCode                            int64
	TagRequiredException                  *interface{}
	UntagResourceOutput                   map[string]interface{}
}
