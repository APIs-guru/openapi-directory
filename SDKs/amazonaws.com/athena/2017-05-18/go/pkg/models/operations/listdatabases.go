package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatabasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDatabasesXAmzTargetEnum string

const (
	ListDatabasesXAmzTargetEnumAmazonAthenaListDatabases ListDatabasesXAmzTargetEnum = "AmazonAthena.ListDatabases"
)

type ListDatabasesHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatabasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDatabasesRequest struct {
	QueryParams ListDatabasesQueryParams
	Headers     ListDatabasesHeaders
	Request     shared.ListDatabasesInput `request:"mediaType=application/json"`
}

type ListDatabasesResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListDatabasesOutput     *shared.ListDatabasesOutput
	MetadataException       *interface{}
	StatusCode              int64
}
