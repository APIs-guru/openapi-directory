package operations

import (
	"openapi/pkg/models/shared"
)

type ValidatePolicyQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ValidatePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ValidatePolicyRequestBodyLocaleEnum string

const (
	ValidatePolicyRequestBodyLocaleEnumDe   ValidatePolicyRequestBodyLocaleEnum = "DE"
	ValidatePolicyRequestBodyLocaleEnumEn   ValidatePolicyRequestBodyLocaleEnum = "EN"
	ValidatePolicyRequestBodyLocaleEnumEs   ValidatePolicyRequestBodyLocaleEnum = "ES"
	ValidatePolicyRequestBodyLocaleEnumFr   ValidatePolicyRequestBodyLocaleEnum = "FR"
	ValidatePolicyRequestBodyLocaleEnumIt   ValidatePolicyRequestBodyLocaleEnum = "IT"
	ValidatePolicyRequestBodyLocaleEnumJa   ValidatePolicyRequestBodyLocaleEnum = "JA"
	ValidatePolicyRequestBodyLocaleEnumKo   ValidatePolicyRequestBodyLocaleEnum = "KO"
	ValidatePolicyRequestBodyLocaleEnumPtBr ValidatePolicyRequestBodyLocaleEnum = "PT_BR"
	ValidatePolicyRequestBodyLocaleEnumZhCn ValidatePolicyRequestBodyLocaleEnum = "ZH_CN"
	ValidatePolicyRequestBodyLocaleEnumZhTw ValidatePolicyRequestBodyLocaleEnum = "ZH_TW"
)

type ValidatePolicyRequestBodyPolicyTypeEnum string

const (
	ValidatePolicyRequestBodyPolicyTypeEnumIdentityPolicy       ValidatePolicyRequestBodyPolicyTypeEnum = "IDENTITY_POLICY"
	ValidatePolicyRequestBodyPolicyTypeEnumResourcePolicy       ValidatePolicyRequestBodyPolicyTypeEnum = "RESOURCE_POLICY"
	ValidatePolicyRequestBodyPolicyTypeEnumServiceControlPolicy ValidatePolicyRequestBodyPolicyTypeEnum = "SERVICE_CONTROL_POLICY"
)

type ValidatePolicyRequestBody struct {
	Locale         *ValidatePolicyRequestBodyLocaleEnum    `json:"locale,omitempty"`
	PolicyDocument string                                  `json:"policyDocument"`
	PolicyType     ValidatePolicyRequestBodyPolicyTypeEnum `json:"policyType"`
}

type ValidatePolicyRequest struct {
	QueryParams ValidatePolicyQueryParams
	Headers     ValidatePolicyHeaders
	Request     ValidatePolicyRequestBody `request:"mediaType=application/json"`
}

type ValidatePolicyResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidatePolicyResponse  *shared.ValidatePolicyResponse
	ValidationException     *interface{}
}
