package operations

import (
	"openapi/pkg/models/shared"
)

type ListEngineVersionsXAmzTargetEnum string

const (
	ListEngineVersionsXAmzTargetEnumAmazonAthenaListEngineVersions ListEngineVersionsXAmzTargetEnum = "AmazonAthena.ListEngineVersions"
)

type ListEngineVersionsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEngineVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEngineVersionsRequest struct {
	Headers ListEngineVersionsHeaders
	Request shared.ListEngineVersionsInput `request:"mediaType=application/json"`
}

type ListEngineVersionsResponse struct {
	ContentType              string
	InternalServerException  *interface{}
	InvalidRequestException  *interface{}
	ListEngineVersionsOutput *shared.ListEngineVersionsOutput
	StatusCode               int64
}
