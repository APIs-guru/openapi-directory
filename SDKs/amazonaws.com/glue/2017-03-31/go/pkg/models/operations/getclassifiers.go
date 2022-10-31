package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassifiersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetClassifiersXAmzTargetEnum string

const (
	GetClassifiersXAmzTargetEnumAwsGlueGetClassifiers GetClassifiersXAmzTargetEnum = "AWSGlue.GetClassifiers"
)

type GetClassifiersHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetClassifiersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetClassifiersRequest struct {
	QueryParams GetClassifiersQueryParams
	Headers     GetClassifiersHeaders
	Request     shared.GetClassifiersRequest `request:"mediaType=application/json"`
}

type GetClassifiersResponse struct {
	ContentType               string
	GetClassifiersResponse    *shared.GetClassifiersResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
