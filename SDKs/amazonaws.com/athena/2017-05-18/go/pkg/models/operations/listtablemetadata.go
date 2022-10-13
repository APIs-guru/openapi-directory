package operations

import (
	"openapi/pkg/models/shared"
)

type ListTableMetadataQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTableMetadataXAmzTargetEnum string

const (
	ListTableMetadataXAmzTargetEnumAmazonAthenaListTableMetadata ListTableMetadataXAmzTargetEnum = "AmazonAthena.ListTableMetadata"
)

type ListTableMetadataHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTableMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTableMetadataRequest struct {
	QueryParams ListTableMetadataQueryParams
	Headers     ListTableMetadataHeaders
	Request     shared.ListTableMetadataInput `request:"mediaType=application/json"`
}

type ListTableMetadataResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListTableMetadataOutput *shared.ListTableMetadataOutput
	MetadataException       *interface{}
	StatusCode              int64
}
