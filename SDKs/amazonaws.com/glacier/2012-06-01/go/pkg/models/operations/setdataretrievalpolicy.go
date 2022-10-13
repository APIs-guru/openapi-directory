package operations

import (
	"openapi/pkg/models/shared"
)

type SetDataRetrievalPolicyPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type SetDataRetrievalPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SetDataRetrievalPolicyRequestBodyPolicy struct {
	Rules []shared.DataRetrievalRule `json:"Rules"`
}

type SetDataRetrievalPolicyRequestBody struct {
	Policy *SetDataRetrievalPolicyRequestBodyPolicy `json:"Policy"`
}

type SetDataRetrievalPolicyRequest struct {
	PathParams SetDataRetrievalPolicyPathParams
	Headers    SetDataRetrievalPolicyHeaders
	Request    SetDataRetrievalPolicyRequestBody `request:"mediaType=application/json"`
}

type SetDataRetrievalPolicyResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
