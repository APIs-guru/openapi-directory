package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCodeCoveragesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeCodeCoveragesXAmzTargetEnum string

const (
	DescribeCodeCoveragesXAmzTargetEnumCodeBuild20161006DescribeCodeCoverages DescribeCodeCoveragesXAmzTargetEnum = "CodeBuild_20161006.DescribeCodeCoverages"
)

type DescribeCodeCoveragesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCodeCoveragesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCodeCoveragesRequest struct {
	QueryParams DescribeCodeCoveragesQueryParams
	Headers     DescribeCodeCoveragesHeaders
	Request     shared.DescribeCodeCoveragesInput `request:"mediaType=application/json"`
}

type DescribeCodeCoveragesResponse struct {
	ContentType                 string
	DescribeCodeCoveragesOutput *shared.DescribeCodeCoveragesOutput
	InvalidInputException       *interface{}
	StatusCode                  int64
}
