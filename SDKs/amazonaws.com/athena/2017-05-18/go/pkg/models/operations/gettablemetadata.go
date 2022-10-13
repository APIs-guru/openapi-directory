package operations

import (
	"openapi/pkg/models/shared"
)

type GetTableMetadataXAmzTargetEnum string

const (
	GetTableMetadataXAmzTargetEnumAmazonAthenaGetTableMetadata GetTableMetadataXAmzTargetEnum = "AmazonAthena.GetTableMetadata"
)

type GetTableMetadataHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTableMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTableMetadataRequest struct {
	Headers GetTableMetadataHeaders
	Request shared.GetTableMetadataInput `request:"mediaType=application/json"`
}

type GetTableMetadataResponse struct {
	ContentType             string
	GetTableMetadataOutput  *shared.GetTableMetadataOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	MetadataException       *interface{}
	StatusCode              int64
}
