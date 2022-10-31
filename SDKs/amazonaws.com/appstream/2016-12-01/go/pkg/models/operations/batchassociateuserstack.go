package operations

import (
	"openapi/pkg/models/shared"
)

type BatchAssociateUserStackXAmzTargetEnum string

const (
	BatchAssociateUserStackXAmzTargetEnumPhotonAdminProxyServiceBatchAssociateUserStack BatchAssociateUserStackXAmzTargetEnum = "PhotonAdminProxyService.BatchAssociateUserStack"
)

type BatchAssociateUserStackHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchAssociateUserStackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
