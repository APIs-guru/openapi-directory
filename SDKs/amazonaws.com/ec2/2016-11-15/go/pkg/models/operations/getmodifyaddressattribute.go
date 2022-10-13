package operations

type GetModifyAddressAttributeActionEnum string

const (
	GetModifyAddressAttributeActionEnumModifyAddressAttribute GetModifyAddressAttributeActionEnum = "ModifyAddressAttribute"
)

type GetModifyAddressAttributeVersionEnum string

const (
	GetModifyAddressAttributeVersionEnumTwoThousandAndSixteen1115 GetModifyAddressAttributeVersionEnum = "2016-11-15"
)

type GetModifyAddressAttributeQueryParams struct {
	Action       GetModifyAddressAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllocationID string                               `queryParam:"style=form,explode=true,name=AllocationId"`
	DomainName   *string                              `queryParam:"style=form,explode=true,name=DomainName"`
	DryRun       *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	Version      GetModifyAddressAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyAddressAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyAddressAttributeRequest struct {
	QueryParams GetModifyAddressAttributeQueryParams
	Headers     GetModifyAddressAttributeHeaders
}

type GetModifyAddressAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
