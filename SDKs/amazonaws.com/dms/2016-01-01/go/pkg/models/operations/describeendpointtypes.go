package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointTypesQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeEndpointTypesXAmzTargetEnum string

const (
	DescribeEndpointTypesXAmzTargetEnumAmazonDmSv20160101DescribeEndpointTypes DescribeEndpointTypesXAmzTargetEnum = "AmazonDMSv20160101.DescribeEndpointTypes"
)

type DescribeEndpointTypesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointTypesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEndpointTypesRequest struct {
	QueryParams DescribeEndpointTypesQueryParams
	Headers     DescribeEndpointTypesHeaders
	Request     shared.DescribeEndpointTypesMessage `request:"mediaType=application/json"`
}

type DescribeEndpointTypesResponse struct {
	ContentType                   string
	DescribeEndpointTypesResponse *shared.DescribeEndpointTypesResponse
	StatusCode                    int64
}
