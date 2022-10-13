package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReportDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeReportDefinitionsXAmzTargetEnum string

const (
	DescribeReportDefinitionsXAmzTargetEnumAwsOrigamiServiceGatewayServiceDescribeReportDefinitions DescribeReportDefinitionsXAmzTargetEnum = "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
)

type DescribeReportDefinitionsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReportDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReportDefinitionsRequest struct {
	QueryParams DescribeReportDefinitionsQueryParams
	Headers     DescribeReportDefinitionsHeaders
	Request     shared.DescribeReportDefinitionsRequest `request:"mediaType=application/json"`
}

type DescribeReportDefinitionsResponse struct {
	ContentType                       string
	DescribeReportDefinitionsResponse *shared.DescribeReportDefinitionsResponse
	InternalErrorException            *interface{}
	StatusCode                        int64
}
