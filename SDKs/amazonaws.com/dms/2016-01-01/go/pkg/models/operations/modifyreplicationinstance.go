package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyReplicationInstanceXAmzTargetEnum string

const (
	ModifyReplicationInstanceXAmzTargetEnumAmazonDmSv20160101ModifyReplicationInstance ModifyReplicationInstanceXAmzTargetEnum = "AmazonDMSv20160101.ModifyReplicationInstance"
)

type ModifyReplicationInstanceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyReplicationInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyReplicationInstanceRequest struct {
	Headers ModifyReplicationInstanceHeaders
	Request shared.ModifyReplicationInstanceMessage `request:"mediaType=application/json"`
}

type ModifyReplicationInstanceResponse struct {
	AccessDeniedFault                 *interface{}
	ContentType                       string
	InsufficientResourceCapacityFault *interface{}
	InvalidResourceStateFault         *interface{}
	ModifyReplicationInstanceResponse *shared.ModifyReplicationInstanceResponse
	ResourceAlreadyExistsFault        *interface{}
	ResourceNotFoundFault             *interface{}
	StatusCode                        int64
	StorageQuotaExceededFault         *interface{}
	UpgradeDependencyFailureFault     *interface{}
}
