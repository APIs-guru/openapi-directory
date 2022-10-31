package operations

import (
	"openapi/pkg/models/shared"
)

type ListPreparedStatementsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPreparedStatementsXAmzTargetEnum string

const (
	ListPreparedStatementsXAmzTargetEnumAmazonAthenaListPreparedStatements ListPreparedStatementsXAmzTargetEnum = "AmazonAthena.ListPreparedStatements"
)

type ListPreparedStatementsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPreparedStatementsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListPreparedStatementsRequest struct {
	QueryParams ListPreparedStatementsQueryParams
	Headers     ListPreparedStatementsHeaders
	Request     shared.ListPreparedStatementsInput `request:"mediaType=application/json"`
}

type ListPreparedStatementsResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	InvalidRequestException      *interface{}
	ListPreparedStatementsOutput *shared.ListPreparedStatementsOutput
	StatusCode                   int64
}
