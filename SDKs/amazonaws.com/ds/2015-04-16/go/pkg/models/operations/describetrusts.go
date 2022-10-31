package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrustsXAmzTargetEnum string

const (
	DescribeTrustsXAmzTargetEnumDirectoryService20150416DescribeTrusts DescribeTrustsXAmzTargetEnum = "DirectoryService_20150416.DescribeTrusts"
)

type DescribeTrustsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrustsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeTrustsRequest struct {
	Headers DescribeTrustsHeaders
	Request shared.DescribeTrustsRequest `request:"mediaType=application/json"`
}

type DescribeTrustsResponse struct {
	ClientException               *interface{}
	ContentType                   string
	DescribeTrustsResult          *shared.DescribeTrustsResult
	EntityDoesNotExistException   *interface{}
	InvalidNextTokenException     *interface{}
	InvalidParameterException     *interface{}
	ServiceException              *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
