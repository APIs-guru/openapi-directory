package operations

import (
	"openapi/pkg/models/shared"
)

type SetTerminationProtectionXAmzTargetEnum string

const (
	SetTerminationProtectionXAmzTargetEnumElasticMapReduceSetTerminationProtection SetTerminationProtectionXAmzTargetEnum = "ElasticMapReduce.SetTerminationProtection"
)

type SetTerminationProtectionHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetTerminationProtectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetTerminationProtectionRequest struct {
	Headers SetTerminationProtectionHeaders
	Request shared.SetTerminationProtectionInput `request:"mediaType=application/json"`
}

type SetTerminationProtectionResponse struct {
	ContentType         string
	InternalServerError *interface{}
	StatusCode          int64
}
