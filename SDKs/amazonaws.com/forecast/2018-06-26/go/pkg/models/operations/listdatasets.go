package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDatasetsXAmzTargetEnum string

const (
	ListDatasetsXAmzTargetEnumAmazonForecastListDatasets ListDatasetsXAmzTargetEnum = "AmazonForecast.ListDatasets"
)

type ListDatasetsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatasetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDatasetsRequest struct {
	QueryParams ListDatasetsQueryParams
	Headers     ListDatasetsHeaders
	Request     shared.ListDatasetsRequest `request:"mediaType=application/json"`
}

type ListDatasetsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListDatasetsResponse      *shared.ListDatasetsResponse
	StatusCode                int64
}
