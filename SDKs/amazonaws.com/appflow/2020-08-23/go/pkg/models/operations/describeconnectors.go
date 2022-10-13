package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectorsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeConnectorsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeConnectorsRequestBody struct {
	ConnectorTypes []shared.ConnectorTypeEnum `json:"connectorTypes"`
	NextToken      *string                    `json:"nextToken"`
}

type DescribeConnectorsRequest struct {
	QueryParams DescribeConnectorsQueryParams
	Headers     DescribeConnectorsHeaders
	Request     DescribeConnectorsRequestBody `request:"mediaType=application/json"`
}

type DescribeConnectorsResponse struct {
	ContentType                string
	DescribeConnectorsResponse *shared.DescribeConnectorsResponse
	InternalServerException    *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
