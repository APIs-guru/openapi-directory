package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTestCasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeTestCasesXAmzTargetEnum string

const (
	DescribeTestCasesXAmzTargetEnumCodeBuild20161006DescribeTestCases DescribeTestCasesXAmzTargetEnum = "CodeBuild_20161006.DescribeTestCases"
)

type DescribeTestCasesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTestCasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTestCasesRequest struct {
	QueryParams DescribeTestCasesQueryParams
	Headers     DescribeTestCasesHeaders
	Request     shared.DescribeTestCasesInput `request:"mediaType=application/json"`
}

type DescribeTestCasesResponse struct {
	ContentType               string
	DescribeTestCasesOutput   *shared.DescribeTestCasesOutput
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
