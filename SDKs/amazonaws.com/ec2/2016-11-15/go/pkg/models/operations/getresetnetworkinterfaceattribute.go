package operations

type GetResetNetworkInterfaceAttributeActionEnum string

const (
	GetResetNetworkInterfaceAttributeActionEnumResetNetworkInterfaceAttribute GetResetNetworkInterfaceAttributeActionEnum = "ResetNetworkInterfaceAttribute"
)

type GetResetNetworkInterfaceAttributeVersionEnum string

const (
	GetResetNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 GetResetNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)

type GetResetNetworkInterfaceAttributeQueryParams struct {
	Action             GetResetNetworkInterfaceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                                        `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkInterfaceID string                                       `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	SourceDestCheck    *string                                      `queryParam:"style=form,explode=true,name=SourceDestCheck"`
	Version            GetResetNetworkInterfaceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResetNetworkInterfaceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResetNetworkInterfaceAttributeRequest struct {
	QueryParams GetResetNetworkInterfaceAttributeQueryParams
	Headers     GetResetNetworkInterfaceAttributeHeaders
}

type GetResetNetworkInterfaceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
