package operations

import (
	"openapi/pkg/models/shared"
)

type BatchAssociateUserStackXAmzTargetEnum string

const (
	BatchAssociateUserStackXAmzTargetEnumPhotonAdminProxyServiceBatchAssociateUserStack BatchAssociateUserStackXAmzTargetEnum = "PhotonAdminProxyService.BatchAssociateUserStack"
)

type BatchAssociateUserStackHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchAssociateUserStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchAssociateUserStackRequest struct {
	Headers BatchAssociateUserStackHeaders
	Request shared.BatchAssociateUserStackRequest `request:"mediaType=application/json"`
}

type BatchAssociateUserStackResponse struct {
	BatchAssociateUserStackResult        *shared.BatchAssociateUserStackResult
	ContentType                          string
	InvalidParameterCombinationException *interface{}
	OperationNotPermittedException       *interface{}
	StatusCode                           int64
}
