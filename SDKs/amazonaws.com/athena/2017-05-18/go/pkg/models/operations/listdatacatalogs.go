package operations

import (
	"openapi/pkg/models/shared"
)

type ListDataCatalogsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDataCatalogsXAmzTargetEnum string

const (
	ListDataCatalogsXAmzTargetEnumAmazonAthenaListDataCatalogs ListDataCatalogsXAmzTargetEnum = "AmazonAthena.ListDataCatalogs"
)

type ListDataCatalogsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDataCatalogsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDataCatalogsRequest struct {
	QueryParams ListDataCatalogsQueryParams
	Headers     ListDataCatalogsHeaders
	Request     shared.ListDataCatalogsInput `request:"mediaType=application/json"`
}

type ListDataCatalogsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListDataCatalogsOutput  *shared.ListDataCatalogsOutput
	StatusCode              int64
}
