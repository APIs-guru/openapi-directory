package operations

type GetModifyVpcTenancyActionEnum string

const (
	GetModifyVpcTenancyActionEnumModifyVpcTenancy GetModifyVpcTenancyActionEnum = "ModifyVpcTenancy"
)

type GetModifyVpcTenancyInstanceTenancyEnum string

const (
	GetModifyVpcTenancyInstanceTenancyEnumDefault GetModifyVpcTenancyInstanceTenancyEnum = "default"
)

type GetModifyVpcTenancyVersionEnum string

const (
	GetModifyVpcTenancyVersionEnumTwoThousandAndSixteen1115 GetModifyVpcTenancyVersionEnum = "2016-11-15"
)

type GetModifyVpcTenancyQueryParams struct {
	Action          GetModifyVpcTenancyActionEnum          `queryParam:"style=form,explode=true,name=Action"`
	DryRun          *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceTenancy GetModifyVpcTenancyInstanceTenancyEnum `queryParam:"style=form,explode=true,name=InstanceTenancy"`
	Version         GetModifyVpcTenancyVersionEnum         `queryParam:"style=form,explode=true,name=Version"`
	VpcID           string                                 `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetModifyVpcTenancyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyVpcTenancyRequest struct {
	QueryParams GetModifyVpcTenancyQueryParams
	Headers     GetModifyVpcTenancyHeaders
}

type GetModifyVpcTenancyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
