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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
