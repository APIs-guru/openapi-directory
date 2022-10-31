package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPICachePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateAPICacheHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAPICacheRequestBodyAPICachingBehaviorEnum string

const (
	UpdateAPICacheRequestBodyAPICachingBehaviorEnumFullRequestCaching UpdateAPICacheRequestBodyAPICachingBehaviorEnum = "FULL_REQUEST_CACHING"
	UpdateAPICacheRequestBodyAPICachingBehaviorEnumPerResolverCaching UpdateAPICacheRequestBodyAPICachingBehaviorEnum = "PER_RESOLVER_CACHING"
)

type UpdateAPICacheRequestBodyTypeEnum string

const (
	UpdateAPICacheRequestBodyTypeEnumT2Small   UpdateAPICacheRequestBodyTypeEnum = "T2_SMALL"
	UpdateAPICacheRequestBodyTypeEnumT2Medium  UpdateAPICacheRequestBodyTypeEnum = "T2_MEDIUM"
	UpdateAPICacheRequestBodyTypeEnumR4Large   UpdateAPICacheRequestBodyTypeEnum = "R4_LARGE"
	UpdateAPICacheRequestBodyTypeEnumR4Xlarge  UpdateAPICacheRequestBodyTypeEnum = "R4_XLARGE"
	UpdateAPICacheRequestBodyTypeEnumR42Xlarge UpdateAPICacheRequestBodyTypeEnum = "R4_2XLARGE"
	UpdateAPICacheRequestBodyTypeEnumR44Xlarge UpdateAPICacheRequestBodyTypeEnum = "R4_4XLARGE"
	UpdateAPICacheRequestBodyTypeEnumR48Xlarge UpdateAPICacheRequestBodyTypeEnum = "R4_8XLARGE"
	UpdateAPICacheRequestBodyTypeEnumSmall     UpdateAPICacheRequestBodyTypeEnum = "SMALL"
	UpdateAPICacheRequestBodyTypeEnumMedium    UpdateAPICacheRequestBodyTypeEnum = "MEDIUM"
	UpdateAPICacheRequestBodyTypeEnumLarge     UpdateAPICacheRequestBodyTypeEnum = "LARGE"
	UpdateAPICacheRequestBodyTypeEnumXlarge    UpdateAPICacheRequestBodyTypeEnum = "XLARGE"
	UpdateAPICacheRequestBodyTypeEnumLarge2X   UpdateAPICacheRequestBodyTypeEnum = "LARGE_2X"
	UpdateAPICacheRequestBodyTypeEnumLarge4X   UpdateAPICacheRequestBodyTypeEnum = "LARGE_4X"
	UpdateAPICacheRequestBodyTypeEnumLarge8X   UpdateAPICacheRequestBodyTypeEnum = "LARGE_8X"
	UpdateAPICacheRequestBodyTypeEnumLarge12X  UpdateAPICacheRequestBodyTypeEnum = "LARGE_12X"
)

type UpdateAPICacheRequestBody struct {
	APICachingBehavior UpdateAPICacheRequestBodyAPICachingBehaviorEnum `json:"apiCachingBehavior"`
	TTL                int64                                           `json:"ttl"`
	Type               UpdateAPICacheRequestBodyTypeEnum               `json:"type"`
}

type UpdateAPICacheRequest struct {
	PathParams UpdateAPICachePathParams
	Headers    UpdateAPICacheHeaders
	Request    UpdateAPICacheRequestBody `request:"mediaType=application/json"`
}

type UpdateAPICacheResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
	UpdateAPICacheResponse          *shared.UpdateAPICacheResponse
}
