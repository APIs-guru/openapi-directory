package operations

type PostDescribeScheduledActionsActionEnum string

const (
	PostDescribeScheduledActionsActionEnumDescribeScheduledActions PostDescribeScheduledActionsActionEnum = "DescribeScheduledActions"
)

type PostDescribeScheduledActionsVersionEnum string

const (
	PostDescribeScheduledActionsVersionEnumTwoThousandAndEleven0101 PostDescribeScheduledActionsVersionEnum = "2011-01-01"
)

type PostDescribeScheduledActionsQueryParams struct {
	Action     PostDescribeScheduledActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeScheduledActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeScheduledActionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeScheduledActionsRequest struct {
	QueryParams PostDescribeScheduledActionsQueryParams
	Headers     PostDescribeScheduledActionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeScheduledActionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
