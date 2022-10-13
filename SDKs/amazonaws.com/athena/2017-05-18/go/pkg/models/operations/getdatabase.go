package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseXAmzTargetEnum string

const (
	GetDatabaseXAmzTargetEnumAmazonAthenaGetDatabase GetDatabaseXAmzTargetEnum = "AmazonAthena.GetDatabase"
)

type GetDatabaseHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDatabaseRequest struct {
	Headers GetDatabaseHeaders
	Request shared.GetDatabaseInput `request:"mediaType=application/json"`
}

type GetDatabaseResponse struct {
	ContentType             string
	GetDatabaseOutput       *shared.GetDatabaseOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	MetadataException       *interface{}
	StatusCode              int64
}
