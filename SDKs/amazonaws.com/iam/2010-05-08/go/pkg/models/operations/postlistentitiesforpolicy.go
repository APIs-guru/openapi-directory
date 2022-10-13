package operations

type PostListEntitiesForPolicyActionEnum string

const (
	PostListEntitiesForPolicyActionEnumListEntitiesForPolicy PostListEntitiesForPolicyActionEnum = "ListEntitiesForPolicy"
)

type PostListEntitiesForPolicyVersionEnum string

const (
	PostListEntitiesForPolicyVersionEnumTwoThousandAndTen0508 PostListEntitiesForPolicyVersionEnum = "2010-05-08"
)

type PostListEntitiesForPolicyQueryParams struct {
	Action   PostListEntitiesForPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                              `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListEntitiesForPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListEntitiesForPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListEntitiesForPolicyRequest struct {
	QueryParams PostListEntitiesForPolicyQueryParams
	Headers     PostListEntitiesForPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListEntitiesForPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
