package operations

type PostModifyVpcAttributeActionEnum string

const (
	PostModifyVpcAttributeActionEnumModifyVpcAttribute PostModifyVpcAttributeActionEnum = "ModifyVpcAttribute"
)

type PostModifyVpcAttributeVersionEnum string

const (
	PostModifyVpcAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyVpcAttributeVersionEnum = "2016-11-15"
)

type PostModifyVpcAttributeQueryParams struct {
	Action  PostModifyVpcAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpcAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpcAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyVpcAttributeRequest struct {
	QueryParams PostModifyVpcAttributeQueryParams
	Headers     PostModifyVpcAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpcAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
