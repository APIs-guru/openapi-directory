package operations

type PostDescribeLaunchTemplateVersionsActionEnum string

const (
	PostDescribeLaunchTemplateVersionsActionEnumDescribeLaunchTemplateVersions PostDescribeLaunchTemplateVersionsActionEnum = "DescribeLaunchTemplateVersions"
)

type PostDescribeLaunchTemplateVersionsVersionEnum string

const (
	PostDescribeLaunchTemplateVersionsVersionEnumTwoThousandAndSixteen1115 PostDescribeLaunchTemplateVersionsVersionEnum = "2016-11-15"
)

type PostDescribeLaunchTemplateVersionsQueryParams struct {
	Action     PostDescribeLaunchTemplateVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                       `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeLaunchTemplateVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLaunchTemplateVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeLaunchTemplateVersionsRequest struct {
	QueryParams PostDescribeLaunchTemplateVersionsQueryParams
	Headers     PostDescribeLaunchTemplateVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLaunchTemplateVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
