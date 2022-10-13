package operations

type PostDescribeLaunchConfigurationsActionEnum string

const (
	PostDescribeLaunchConfigurationsActionEnumDescribeLaunchConfigurations PostDescribeLaunchConfigurationsActionEnum = "DescribeLaunchConfigurations"
)

type PostDescribeLaunchConfigurationsVersionEnum string

const (
	PostDescribeLaunchConfigurationsVersionEnumTwoThousandAndEleven0101 PostDescribeLaunchConfigurationsVersionEnum = "2011-01-01"
)

type PostDescribeLaunchConfigurationsQueryParams struct {
	Action     PostDescribeLaunchConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                                     `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeLaunchConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLaunchConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLaunchConfigurationsRequest struct {
	QueryParams PostDescribeLaunchConfigurationsQueryParams
	Headers     PostDescribeLaunchConfigurationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLaunchConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
