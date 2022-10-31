package operations

type PostGetContextKeysForCustomPolicyActionEnum string

const (
	PostGetContextKeysForCustomPolicyActionEnumGetContextKeysForCustomPolicy PostGetContextKeysForCustomPolicyActionEnum = "GetContextKeysForCustomPolicy"
)

type PostGetContextKeysForCustomPolicyVersionEnum string

const (
	PostGetContextKeysForCustomPolicyVersionEnumTwoThousandAndTen0508 PostGetContextKeysForCustomPolicyVersionEnum = "2010-05-08"
)

type PostGetContextKeysForCustomPolicyQueryParams struct {
	Action  PostGetContextKeysForCustomPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetContextKeysForCustomPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetContextKeysForCustomPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetContextKeysForCustomPolicyRequest struct {
	QueryParams PostGetContextKeysForCustomPolicyQueryParams
	Headers     PostGetContextKeysForCustomPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetContextKeysForCustomPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
