package operations

type GetDetachClassicLinkVpcActionEnum string

const (
	GetDetachClassicLinkVpcActionEnumDetachClassicLinkVpc GetDetachClassicLinkVpcActionEnum = "DetachClassicLinkVpc"
)

type GetDetachClassicLinkVpcVersionEnum string

const (
	GetDetachClassicLinkVpcVersionEnumTwoThousandAndSixteen1115 GetDetachClassicLinkVpcVersionEnum = "2016-11-15"
)

type GetDetachClassicLinkVpcQueryParams struct {
	Action     GetDetachClassicLinkVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                             `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetDetachClassicLinkVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID      string                             `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDetachClassicLinkVpcHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachClassicLinkVpcRequest struct {
	QueryParams GetDetachClassicLinkVpcQueryParams
	Headers     GetDetachClassicLinkVpcHeaders
}

type GetDetachClassicLinkVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
