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
	ListTablesXAmzTargetEnumDynamoDb20111205ListTables ListTablesXAmzTargetEnum = "DynamoDB_20111205.ListTables"
)

type ListTablesHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTablesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
