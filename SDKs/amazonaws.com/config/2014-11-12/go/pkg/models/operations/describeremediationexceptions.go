package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRemediationExceptionsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeRemediationExceptionsXAmzTargetEnum string

const (
	DescribeRemediationExceptionsXAmzTargetEnumStarlingDoveServiceDescribeRemediationExceptions DescribeRemediationExceptionsXAmzTargetEnum = "StarlingDoveService.DescribeRemediationExceptions"
)

type DescribeRemediationExceptionsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRemediationExceptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeRemediationExceptionsRequest struct {
	QueryParams DescribeRemediationExceptionsQueryParams
	Headers     DescribeRemediationExceptionsHeaders
	Request     shared.DescribeRemediationExceptionsRequest `request:"mediaType=application/json"`
}

type DescribeRemediationExceptionsResponse struct {
	ContentType                           string
	DescribeRemediationExceptionsResponse *shared.DescribeRemediationExceptionsResponse
	InvalidNextTokenException             *interface{}
	InvalidParameterValueException        *interface{}
	StatusCode                            int64
}
