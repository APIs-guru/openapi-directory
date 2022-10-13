package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeComplianceByResourceQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeComplianceByResourceXAmzTargetEnum string

const (
	DescribeComplianceByResourceXAmzTargetEnumStarlingDoveServiceDescribeComplianceByResource DescribeComplianceByResourceXAmzTargetEnum = "StarlingDoveService.DescribeComplianceByResource"
)

type DescribeComplianceByResourceHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeComplianceByResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeComplianceByResourceRequest struct {
	QueryParams DescribeComplianceByResourceQueryParams
	Headers     DescribeComplianceByResourceHeaders
	Request     shared.DescribeComplianceByResourceRequest `request:"mediaType=application/json"`
}

type DescribeComplianceByResourceResponse struct {
	ContentType                          string
	DescribeComplianceByResourceResponse *shared.DescribeComplianceByResourceResponse
	InvalidNextTokenException            *interface{}
	InvalidParameterValueException       *interface{}
	StatusCode                           int64
}
