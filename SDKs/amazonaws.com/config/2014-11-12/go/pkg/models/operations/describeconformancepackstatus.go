package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConformancePackStatusQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConformancePackStatusXAmzTargetEnum string

const (
	DescribeConformancePackStatusXAmzTargetEnumStarlingDoveServiceDescribeConformancePackStatus DescribeConformancePackStatusXAmzTargetEnum = "StarlingDoveService.DescribeConformancePackStatus"
)

type DescribeConformancePackStatusHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConformancePackStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeConformancePackStatusRequest struct {
	QueryParams DescribeConformancePackStatusQueryParams
	Headers     DescribeConformancePackStatusHeaders
	Request     shared.DescribeConformancePackStatusRequest `request:"mediaType=application/json"`
}

type DescribeConformancePackStatusResponse struct {
	ContentType                           string
	DescribeConformancePackStatusResponse *shared.DescribeConformancePackStatusResponse
	InvalidLimitException                 *interface{}
	InvalidNextTokenException             *interface{}
	InvalidParameterValueException        *interface{}
	StatusCode                            int64
}
