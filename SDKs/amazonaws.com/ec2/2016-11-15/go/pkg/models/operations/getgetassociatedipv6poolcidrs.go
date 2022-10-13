package operations

type GetGetAssociatedIpv6PoolCidrsActionEnum string

const (
	GetGetAssociatedIpv6PoolCidrsActionEnumGetAssociatedIpv6PoolCidrs GetGetAssociatedIpv6PoolCidrsActionEnum = "GetAssociatedIpv6PoolCidrs"
)

type GetGetAssociatedIpv6PoolCidrsVersionEnum string

const (
	GetGetAssociatedIpv6PoolCidrsVersionEnumTwoThousandAndSixteen1115 GetGetAssociatedIpv6PoolCidrsVersionEnum = "2016-11-15"
)

type GetGetAssociatedIpv6PoolCidrsQueryParams struct {
	Action     GetGetAssociatedIpv6PoolCidrsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	MaxResults *int64                                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                  `queryParam:"style=form,explode=true,name=NextToken"`
	PoolID     string                                   `queryParam:"style=form,explode=true,name=PoolId"`
	Version    GetGetAssociatedIpv6PoolCidrsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAssociatedIpv6PoolCidrsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetAssociatedIpv6PoolCidrsRequest struct {
	QueryParams GetGetAssociatedIpv6PoolCidrsQueryParams
	Headers     GetGetAssociatedIpv6PoolCidrsHeaders
}

type GetGetAssociatedIpv6PoolCidrsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
