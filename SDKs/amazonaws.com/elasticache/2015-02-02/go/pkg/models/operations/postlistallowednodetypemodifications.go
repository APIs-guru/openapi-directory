package operations

type PostListAllowedNodeTypeModificationsActionEnum string

const (
	PostListAllowedNodeTypeModificationsActionEnumListAllowedNodeTypeModifications PostListAllowedNodeTypeModificationsActionEnum = "ListAllowedNodeTypeModifications"
)

type PostListAllowedNodeTypeModificationsVersionEnum string

const (
	PostListAllowedNodeTypeModificationsVersionEnumTwoThousandAndFifteen0202 PostListAllowedNodeTypeModificationsVersionEnum = "2015-02-02"
)

type PostListAllowedNodeTypeModificationsQueryParams struct {
	Action  PostListAllowedNodeTypeModificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListAllowedNodeTypeModificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListAllowedNodeTypeModificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListAllowedNodeTypeModificationsRequest struct {
	QueryParams PostListAllowedNodeTypeModificationsQueryParams
	Headers     PostListAllowedNodeTypeModificationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListAllowedNodeTypeModificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
