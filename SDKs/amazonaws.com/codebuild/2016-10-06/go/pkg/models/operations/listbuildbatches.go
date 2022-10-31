package operations

import (
	"openapi/pkg/models/shared"
)

type ListBuildBatchesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBuildBatchesXAmzTargetEnum string

const (
	ListBuildBatchesXAmzTargetEnumCodeBuild20161006ListBuildBatches ListBuildBatchesXAmzTargetEnum = "CodeBuild_20161006.ListBuildBatches"
)

type ListBuildBatchesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBuildBatchesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListBuildBatchesRequest struct {
	QueryParams ListBuildBatchesQueryParams
	Headers     ListBuildBatchesHeaders
	Request     shared.ListBuildBatchesInput `request:"mediaType=application/json"`
}

type ListBuildBatchesResponse struct {
	ContentType            string
	InvalidInputException  *interface{}
	ListBuildBatchesOutput *shared.ListBuildBatchesOutput
	StatusCode             int64
}
