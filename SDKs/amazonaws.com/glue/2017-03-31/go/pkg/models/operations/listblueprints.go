package operations

import (
	"openapi/pkg/models/shared"
)

type ListBlueprintsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListBlueprintsXAmzTargetEnum string

const (
	ListBlueprintsXAmzTargetEnumAwsGlueListBlueprints ListBlueprintsXAmzTargetEnum = "AWSGlue.ListBlueprints"
)

type ListBlueprintsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBlueprintsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListBlueprintsRequest struct {
	QueryParams ListBlueprintsQueryParams
	Headers     ListBlueprintsHeaders
	Request     shared.ListBlueprintsRequest `request:"mediaType=application/json"`
}

type ListBlueprintsResponse struct {
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListBlueprintsResponse    *shared.ListBlueprintsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
