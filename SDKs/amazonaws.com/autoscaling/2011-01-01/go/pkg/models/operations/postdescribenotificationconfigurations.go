package operations

type PostDescribeNotificationConfigurationsActionEnum string

const (
	PostDescribeNotificationConfigurationsActionEnumDescribeNotificationConfigurations PostDescribeNotificationConfigurationsActionEnum = "DescribeNotificationConfigurations"
)

type PostDescribeNotificationConfigurationsVersionEnum string

const (
	PostDescribeNotificationConfigurationsVersionEnumTwoThousandAndEleven0101 PostDescribeNotificationConfigurationsVersionEnum = "2011-01-01"
)

type PostDescribeNotificationConfigurationsQueryParams struct {
	Action     PostDescribeNotificationConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                                           `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeNotificationConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNotificationConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeNotificationConfigurationsRequest struct {
	QueryParams PostDescribeNotificationConfigurationsQueryParams
	Headers     PostDescribeNotificationConfigurationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNotificationConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
