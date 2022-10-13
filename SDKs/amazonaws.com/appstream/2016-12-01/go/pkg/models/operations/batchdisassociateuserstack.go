package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisassociateUserStackXAmzTargetEnum string

const (
	BatchDisassociateUserStackXAmzTargetEnumPhotonAdminProxyServiceBatchDisassociateUserStack BatchDisassociateUserStackXAmzTargetEnum = "PhotonAdminProxyService.BatchDisassociateUserStack"
)

type BatchDisassociateUserStackHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDisassociateUserStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDisassociateUserStackRequest struct {
	Headers BatchDisassociateUserStackHeaders
	Request shared.BatchDisassociateUserStackRequest `request:"mediaType=application/json"`
}

type BatchDisassociateUserStackResponse struct {
	BatchDisassociateUserStackResult     *shared.BatchDisassociateUserStackResult
	ContentType                          string
	InvalidParameterCombinationException *interface{}
	OperationNotPermittedException       *interface{}
	StatusCode                           int64
}
