package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSourceCredentialsXAmzTargetEnum string

const (
	DeleteSourceCredentialsXAmzTargetEnumCodeBuild20161006DeleteSourceCredentials DeleteSourceCredentialsXAmzTargetEnum = "CodeBuild_20161006.DeleteSourceCredentials"
)

type DeleteSourceCredentialsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSourceCredentialsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteSourceCredentialsRequest struct {
	Headers DeleteSourceCredentialsHeaders
	Request shared.DeleteSourceCredentialsInput `request:"mediaType=application/json"`
}

type DeleteSourceCredentialsResponse struct {
	ContentType                   string
	DeleteSourceCredentialsOutput *shared.DeleteSourceCredentialsOutput
	InvalidInputException         *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
