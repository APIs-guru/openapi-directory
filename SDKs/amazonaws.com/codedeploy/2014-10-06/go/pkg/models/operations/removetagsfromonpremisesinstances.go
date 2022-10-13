package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromOnPremisesInstancesXAmzTargetEnum string

const (
	RemoveTagsFromOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006RemoveTagsFromOnPremisesInstances RemoveTagsFromOnPremisesInstancesXAmzTargetEnum = "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances"
)

type RemoveTagsFromOnPremisesInstancesHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromOnPremisesInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsFromOnPremisesInstancesRequest struct {
	Headers RemoveTagsFromOnPremisesInstancesHeaders
	Request shared.RemoveTagsFromOnPremisesInstancesInput `request:"mediaType=application/json"`
}

type RemoveTagsFromOnPremisesInstancesResponse struct {
	ContentType                    string
	InstanceLimitExceededException *interface{}
	InstanceNameRequiredException  *interface{}
	InstanceNotRegisteredException *interface{}
	InvalidInstanceNameException   *interface{}
	InvalidTagException            *interface{}
	StatusCode                     int64
	TagLimitExceededException      *interface{}
	TagRequiredException           *interface{}
}
