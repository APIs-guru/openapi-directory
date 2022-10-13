package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyClusterXAmzTargetEnum string

const (
	ModifyClusterXAmzTargetEnumBaldrAPIServiceModifyCluster ModifyClusterXAmzTargetEnum = "BaldrApiService.ModifyCluster"
)

type ModifyClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyClusterRequest struct {
	Headers ModifyClusterHeaders
	Request shared.ModifyClusterRequest `request:"mediaType=application/json"`
}

type ModifyClusterResponse struct {
	CloudHsmAccessDeniedException     *interface{}
	CloudHsmInternalFailureException  *interface{}
	CloudHsmInvalidRequestException   *interface{}
	CloudHsmResourceNotFoundException *interface{}
	CloudHsmServiceException          *interface{}
	ContentType                       string
	ModifyClusterResponse             *shared.ModifyClusterResponse
	StatusCode                        int64
}
