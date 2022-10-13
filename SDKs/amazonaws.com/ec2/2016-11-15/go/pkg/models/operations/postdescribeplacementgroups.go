package operations

type PostDescribePlacementGroupsActionEnum string

const (
	PostDescribePlacementGroupsActionEnumDescribePlacementGroups PostDescribePlacementGroupsActionEnum = "DescribePlacementGroups"
)

type PostDescribePlacementGroupsVersionEnum string

const (
	PostDescribePlacementGroupsVersionEnumTwoThousandAndSixteen1115 PostDescribePlacementGroupsVersionEnum = "2016-11-15"
)

type PostDescribePlacementGroupsQueryParams struct {
	Action  PostDescribePlacementGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribePlacementGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePlacementGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribePlacementGroupsRequest struct {
	QueryParams PostDescribePlacementGroupsQueryParams
	Headers     PostDescribePlacementGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePlacementGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
