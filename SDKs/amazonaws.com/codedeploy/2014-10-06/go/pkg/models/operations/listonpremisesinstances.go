package operations

import (
	"openapi/pkg/models/shared"
)

type ListOnPremisesInstancesXAmzTargetEnum string

const (
	ListOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006ListOnPremisesInstances ListOnPremisesInstancesXAmzTargetEnum = "CodeDeploy_20141006.ListOnPremisesInstances"
)

type ListOnPremisesInstancesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOnPremisesInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOnPremisesInstancesRequest struct {
	Headers ListOnPremisesInstancesHeaders
	Request shared.ListOnPremisesInstancesInput `request:"mediaType=application/json"`
}

type ListOnPremisesInstancesResponse struct {
	ContentType                        string
	InvalidNextTokenException          *interface{}
	InvalidRegistrationStatusException *interface{}
	InvalidTagFilterException          *interface{}
	ListOnPremisesInstancesOutput      *shared.ListOnPremisesInstancesOutput
	StatusCode                         int64
}
