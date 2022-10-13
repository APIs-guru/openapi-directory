package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountPreferencesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutAccountPreferencesRequestBodyResourceIDTypeEnum string

const (
	PutAccountPreferencesRequestBodyResourceIDTypeEnumLongID  PutAccountPreferencesRequestBodyResourceIDTypeEnum = "LONG_ID"
	PutAccountPreferencesRequestBodyResourceIDTypeEnumShortID PutAccountPreferencesRequestBodyResourceIDTypeEnum = "SHORT_ID"
)

type PutAccountPreferencesRequestBody struct {
	ResourceIDType PutAccountPreferencesRequestBodyResourceIDTypeEnum `json:"ResourceIdType"`
}

type PutAccountPreferencesRequest struct {
	Headers PutAccountPreferencesHeaders
	Request PutAccountPreferencesRequestBody `request:"mediaType=application/json"`
}

type PutAccountPreferencesResponse struct {
	ContentType                   string
	InternalServerError           *interface{}
	PutAccountPreferencesResponse *shared.PutAccountPreferencesResponse
	StatusCode                    int64
}
