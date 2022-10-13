package operations

type PostModifyVpcTenancyActionEnum string

const (
	PostModifyVpcTenancyActionEnumModifyVpcTenancy PostModifyVpcTenancyActionEnum = "ModifyVpcTenancy"
)

type PostModifyVpcTenancyVersionEnum string

const (
	PostModifyVpcTenancyVersionEnumTwoThousandAndSixteen1115 PostModifyVpcTenancyVersionEnum = "2016-11-15"
)

type PostModifyVpcTenancyQueryParams struct {
	Action  PostModifyVpcTenancyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpcTenancyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpcTenancyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpcTenancyRequest struct {
	QueryParams PostModifyVpcTenancyQueryParams
	Headers     PostModifyVpcTenancyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpcTenancyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
