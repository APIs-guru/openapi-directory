package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFileSystemAliasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFileSystemAliasesXAmzTargetEnum string

const (
	DescribeFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeFileSystemAliases DescribeFileSystemAliasesXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases"
)

type DescribeFileSystemAliasesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFileSystemAliasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFileSystemAliasesRequest struct {
	QueryParams DescribeFileSystemAliasesQueryParams
	Headers     DescribeFileSystemAliasesHeaders
	Request     shared.DescribeFileSystemAliasesRequest `request:"mediaType=application/json"`
}

type DescribeFileSystemAliasesResponse struct {
	BadRequest                        *interface{}
	ContentType                       string
	DescribeFileSystemAliasesResponse *shared.DescribeFileSystemAliasesResponse
	FileSystemNotFound                *interface{}
	InternalServerError               *interface{}
	StatusCode                        int64
}
