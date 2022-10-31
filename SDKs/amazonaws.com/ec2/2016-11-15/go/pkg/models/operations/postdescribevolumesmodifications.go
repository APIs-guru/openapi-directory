package operations

type PostDescribeVolumesModificationsActionEnum string

const (
	PostDescribeVolumesModificationsActionEnumDescribeVolumesModifications PostDescribeVolumesModificationsActionEnum = "DescribeVolumesModifications"
)

type PostDescribeVolumesModificationsVersionEnum string

const (
	PostDescribeVolumesModificationsVersionEnumTwoThousandAndSixteen1115 PostDescribeVolumesModificationsVersionEnum = "2016-11-15"
)

type PostDescribeVolumesModificationsQueryParams struct {
	Action     PostDescribeVolumesModificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVolumesModificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVolumesModificationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVolumesModificationsRequest struct {
	QueryParams PostDescribeVolumesModificationsQueryParams
	Headers     PostDescribeVolumesModificationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVolumesModificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
