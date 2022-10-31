package operations

type GetResetAddressAttributeActionEnum string

const (
	GetResetAddressAttributeActionEnumResetAddressAttribute GetResetAddressAttributeActionEnum = "ResetAddressAttribute"
)

type GetResetAddressAttributeAttributeEnum string

const (
	GetResetAddressAttributeAttributeEnumDomainName GetResetAddressAttributeAttributeEnum = "domain-name"
)

type GetResetAddressAttributeVersionEnum string

const (
	GetResetAddressAttributeVersionEnumTwoThousandAndSixteen1115 GetResetAddressAttributeVersionEnum = "2016-11-15"
)

type GetResetAddressAttributeQueryParams struct {
	Action       GetResetAddressAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	AllocationID string                                `queryParam:"style=form,explode=true,name=AllocationId"`
	Attribute    GetResetAddressAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun       *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Version      GetResetAddressAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetResetAddressAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResetAddressAttributeRequest struct {
	QueryParams GetResetAddressAttributeQueryParams
	Headers     GetResetAddressAttributeHeaders
}

type GetResetAddressAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
