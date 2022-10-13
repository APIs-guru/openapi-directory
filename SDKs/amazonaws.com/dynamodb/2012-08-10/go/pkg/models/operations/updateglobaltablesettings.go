package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlobalTableSettingsXAmzTargetEnum string

const (
	UpdateGlobalTableSettingsXAmzTargetEnumDynamoDb20120810UpdateGlobalTableSettings UpdateGlobalTableSettingsXAmzTargetEnum = "DynamoDB_20120810.UpdateGlobalTableSettings"
)

type UpdateGlobalTableSettingsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGlobalTableSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateGlobalTableSettingsRequest struct {
	Headers UpdateGlobalTableSettingsHeaders
	Request shared.UpdateGlobalTableSettingsInput `request:"mediaType=application/json"`
}

type UpdateGlobalTableSettingsResponse struct {
	ContentType                     string
	GlobalTableNotFoundException    *interface{}
	IndexNotFoundException          *interface{}
	InternalServerError             *interface{}
	LimitExceededException          *interface{}
	ReplicaNotFoundException        *interface{}
	ResourceInUseException          *interface{}
	StatusCode                      int64
	UpdateGlobalTableSettingsOutput *shared.UpdateGlobalTableSettingsOutput
}
