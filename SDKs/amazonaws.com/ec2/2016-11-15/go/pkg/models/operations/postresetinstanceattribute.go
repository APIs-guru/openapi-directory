package operations

type PostResetInstanceAttributeActionEnum string

const (
	PostResetInstanceAttributeActionEnumResetInstanceAttribute PostResetInstanceAttributeActionEnum = "ResetInstanceAttribute"
)

type PostResetInstanceAttributeVersionEnum string

const (
	PostResetInstanceAttributeVersionEnumTwoThousandAndSixteen1115 PostResetInstanceAttributeVersionEnum = "2016-11-15"
)

type PostResetInstanceAttributeQueryParams struct {
	Action  PostResetInstanceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetInstanceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetInstanceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostResetInstanceAttributeRequest struct {
	QueryParams PostResetInstanceAttributeQueryParams
	Headers     PostResetInstanceAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetInstanceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
