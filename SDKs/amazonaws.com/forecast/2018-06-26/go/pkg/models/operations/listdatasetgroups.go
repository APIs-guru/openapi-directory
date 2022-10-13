package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasetGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDatasetGroupsXAmzTargetEnum string

const (
	ListDatasetGroupsXAmzTargetEnumAmazonForecastListDatasetGroups ListDatasetGroupsXAmzTargetEnum = "AmazonForecast.ListDatasetGroups"
)

type ListDatasetGroupsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatasetGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDatasetGroupsRequest struct {
	QueryParams ListDatasetGroupsQueryParams
	Headers     ListDatasetGroupsHeaders
	Request     shared.ListDatasetGroupsRequest `request:"mediaType=application/json"`
}

type ListDatasetGroupsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListDatasetGroupsResponse *shared.ListDatasetGroupsResponse
	StatusCode                int64
}
