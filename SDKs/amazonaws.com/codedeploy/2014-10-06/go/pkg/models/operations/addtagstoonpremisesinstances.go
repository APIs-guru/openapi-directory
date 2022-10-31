package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsToOnPremisesInstancesXAmzTargetEnum string

const (
	AddTagsToOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006AddTagsToOnPremisesInstances AddTagsToOnPremisesInstancesXAmzTargetEnum = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
)

type AddTagsToOnPremisesInstancesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsToOnPremisesInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddTagsToOnPremisesInstancesRequest struct {
	Headers AddTagsToOnPremisesInstancesHeaders
	Request shared.AddTagsToOnPremisesInstancesInput `request:"mediaType=application/json"`
}

type AddTagsToOnPremisesInstancesResponse struct {
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
