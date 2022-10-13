package operations

import (
	"openapi/pkg/models/shared"
)

type ListTablesQueryParams struct {
	ExclusiveStartTableName *string `queryParam:"style=form,explode=true,name=ExclusiveStartTableName"`
	Limit                   *string `queryParam:"style=form,explode=true,name=Limit"`
}

type ListTablesXAmzTargetEnum string

const (
	ListTablesXAmzTargetEnumDynamoDb20120810ListTables ListTablesXAmzTargetEnum = "DynamoDB_20120810.ListTables"
)

type ListTablesHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTablesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTablesRequest struct {
	QueryParams ListTablesQueryParams
	Headers     ListTablesHeaders
	Request     shared.ListTablesInput `request:"mediaType=application/json"`
}

type ListTablesResponse struct {
	ContentType         string
	InternalServerError *interface{}
	ListTablesOutput    *shared.ListTablesOutput
	StatusCode          int64
}
