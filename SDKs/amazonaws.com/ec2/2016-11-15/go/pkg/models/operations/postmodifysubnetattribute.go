package operations

type PostModifySubnetAttributeActionEnum string

const (
	PostModifySubnetAttributeActionEnumModifySubnetAttribute PostModifySubnetAttributeActionEnum = "ModifySubnetAttribute"
)

type PostModifySubnetAttributeVersionEnum string

const (
	PostModifySubnetAttributeVersionEnumTwoThousandAndSixteen1115 PostModifySubnetAttributeVersionEnum = "2016-11-15"
)

type PostModifySubnetAttributeQueryParams struct {
	Action  PostModifySubnetAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifySubnetAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifySubnetAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifySubnetAttributeRequest struct {
	QueryParams PostModifySubnetAttributeQueryParams
	Headers     PostModifySubnetAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifySubnetAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
