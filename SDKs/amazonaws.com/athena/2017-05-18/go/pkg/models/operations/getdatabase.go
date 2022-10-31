package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseXAmzTargetEnum string

const (
	GetDatabaseXAmzTargetEnumAmazonAthenaGetDatabase GetDatabaseXAmzTargetEnum = "AmazonAthena.GetDatabase"
)

type GetDatabaseHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
