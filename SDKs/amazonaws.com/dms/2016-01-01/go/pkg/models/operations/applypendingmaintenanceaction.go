package operations

import (
	"openapi/pkg/models/shared"
)

type ApplyPendingMaintenanceActionXAmzTargetEnum string

const (
	ApplyPendingMaintenanceActionXAmzTargetEnumAmazonDmSv20160101ApplyPendingMaintenanceAction ApplyPendingMaintenanceActionXAmzTargetEnum = "AmazonDMSv20160101.ApplyPendingMaintenanceAction"
)

type ApplyPendingMaintenanceActionHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ApplyPendingMaintenanceActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ApplyPendingMaintenanceActionRequest struct {
	Headers ApplyPendingMaintenanceActionHeaders
	Request shared.ApplyPendingMaintenanceActionMessage `request:"mediaType=application/json"`
}

type ApplyPendingMaintenanceActionResponse struct {
	ApplyPendingMaintenanceActionResponse *shared.ApplyPendingMaintenanceActionResponse
	ContentType                           string
	ResourceNotFoundFault                 *interface{}
	StatusCode                            int64
}
