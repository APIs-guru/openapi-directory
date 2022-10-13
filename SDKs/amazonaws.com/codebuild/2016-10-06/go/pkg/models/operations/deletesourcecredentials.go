package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSourceCredentialsXAmzTargetEnum string

const (
	DeleteSourceCredentialsXAmzTargetEnumCodeBuild20161006DeleteSourceCredentials DeleteSourceCredentialsXAmzTargetEnum = "CodeBuild_20161006.DeleteSourceCredentials"
)

type DeleteSourceCredentialsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSourceCredentialsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
