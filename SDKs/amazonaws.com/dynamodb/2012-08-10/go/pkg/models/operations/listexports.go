package operations

import (
	"openapi/pkg/models/shared"
)

type ListExportsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListExportsXAmzTargetEnum string

const (
	ListExportsXAmzTargetEnumDynamoDb20120810ListExports ListExportsXAmzTargetEnum = "DynamoDB_20120810.ListExports"
)

type ListExportsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListExportsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListExportsRequest struct {
	QueryParams ListExportsQueryParams
	Headers     ListExportsHeaders
	Request     shared.ListExportsInput `request:"mediaType=application/json"`
}

type ListExportsResponse struct {
	ContentType            string
	InternalServerError    *interface{}
	LimitExceededException *interface{}
	ListExportsOutput      *shared.ListExportsOutput
	StatusCode             int64
}
