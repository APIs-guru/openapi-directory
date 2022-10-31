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
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCodeCoveragesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
