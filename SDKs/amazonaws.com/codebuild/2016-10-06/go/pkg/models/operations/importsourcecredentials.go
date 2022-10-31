package operations

import (
	"openapi/pkg/models/shared"
)

type ImportSourceCredentialsXAmzTargetEnum string

const (
	ImportSourceCredentialsXAmzTargetEnumCodeBuild20161006ImportSourceCredentials ImportSourceCredentialsXAmzTargetEnum = "CodeBuild_20161006.ImportSourceCredentials"
)

type ImportSourceCredentialsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportSourceCredentialsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ImportSourceCredentialsRequest struct {
	Headers ImportSourceCredentialsHeaders
	Request shared.ImportSourceCredentialsInput `request:"mediaType=application/json"`
}

type ImportSourceCredentialsResponse struct {
	AccountLimitExceededException  *interface{}
	ContentType                    string
	ImportSourceCredentialsOutput  *shared.ImportSourceCredentialsOutput
	InvalidInputException          *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
}
