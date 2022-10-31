package operations

type GetDescribeNotificationConfigurationsActionEnum string

const (
	GetDescribeNotificationConfigurationsActionEnumDescribeNotificationConfigurations GetDescribeNotificationConfigurationsActionEnum = "DescribeNotificationConfigurations"
)

type GetDescribeNotificationConfigurationsVersionEnum string

const (
	GetDescribeNotificationConfigurationsVersionEnumTwoThousandAndEleven0101 GetDescribeNotificationConfigurationsVersionEnum = "2011-01-01"
)

type GetDescribeNotificationConfigurationsQueryParams struct {
	Action                GetDescribeNotificationConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupNames []string                                         `queryParam:"style=form,explode=true,name=AutoScalingGroupNames"`
	MaxRecords            *int64                                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken             *string                                          `queryParam:"style=form,explode=true,name=NextToken"`
	Version               GetDescribeNotificationConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeNotificationConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeNotificationConfigurationsRequest struct {
	QueryParams GetDescribeNotificationConfigurationsQueryParams
	Headers     GetDescribeNotificationConfigurationsHeaders
}

type GetDescribeNotificationConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
