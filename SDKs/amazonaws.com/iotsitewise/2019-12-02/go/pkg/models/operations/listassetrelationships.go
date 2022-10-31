package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssetRelationshipsPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type ListAssetRelationshipsTraversalTypeEnum string

const (
	ListAssetRelationshipsTraversalTypeEnumPathToRoot ListAssetRelationshipsTraversalTypeEnum = "PATH_TO_ROOT"
)

type ListAssetRelationshipsQueryParams struct {
	MaxResults    *int64                                  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string                                 `queryParam:"style=form,explode=true,name=nextToken"`
	TraversalType ListAssetRelationshipsTraversalTypeEnum `queryParam:"style=form,explode=true,name=traversalType"`
}

type ListAssetRelationshipsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAssetRelationshipsRequest struct {
	PathParams  ListAssetRelationshipsPathParams
	QueryParams ListAssetRelationshipsQueryParams
	Headers     ListAssetRelationshipsHeaders
}

type ListAssetRelationshipsResponse struct {
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ListAssetRelationshipsResponse *shared.ListAssetRelationshipsResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
