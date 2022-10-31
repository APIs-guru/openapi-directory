package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlobalTableSettingsXAmzTargetEnum string

const (
	UpdateGlobalTableSettingsXAmzTargetEnumDynamoDb20120810UpdateGlobalTableSettings UpdateGlobalTableSettingsXAmzTargetEnum = "DynamoDB_20120810.UpdateGlobalTableSettings"
)

type UpdateGlobalTableSettingsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGlobalTableSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
