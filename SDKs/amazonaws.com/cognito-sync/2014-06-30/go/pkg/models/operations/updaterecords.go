package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRecordsPathParams struct {
	DatasetName    string `pathParam:"style=simple,explode=false,name=DatasetName"`
	IdentityID     string `pathParam:"style=simple,explode=false,name=IdentityId"`
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type UpdateRecordsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzClientContext *string `header:"name=x-amz-Client-Context"`
}

type UpdateRecordsRequestBody struct {
	DeviceID         *string              `json:"DeviceId,omitempty"`
	RecordPatches    []shared.RecordPatch `json:"RecordPatches,omitempty"`
	SyncSessionToken string               `json:"SyncSessionToken"`
}

type UpdateRecordsRequest struct {
	PathParams UpdateRecordsPathParams
	Headers    UpdateRecordsHeaders
	Request    UpdateRecordsRequestBody `request:"mediaType=application/json"`
}

type UpdateRecordsResponse struct {
	ContentType                          string
	InternalErrorException               *interface{}
	InvalidLambdaFunctionOutputException *interface{}
	InvalidParameterException            *interface{}
	LambdaThrottledException             *interface{}
	LimitExceededException               *interface{}
	NotAuthorizedException               *interface{}
	ResourceConflictException            *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	UpdateRecordsResponse                *shared.UpdateRecordsResponse
}
