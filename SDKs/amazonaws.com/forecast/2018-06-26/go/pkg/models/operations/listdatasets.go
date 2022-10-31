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
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatasetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
