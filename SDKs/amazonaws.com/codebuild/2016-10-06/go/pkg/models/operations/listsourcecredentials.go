package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceCredentialsXAmzTargetEnum string

const (
	ListSourceCredentialsXAmzTargetEnumCodeBuild20161006ListSourceCredentials ListSourceCredentialsXAmzTargetEnum = "CodeBuild_20161006.ListSourceCredentials"
)

type ListSourceCredentialsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSourceCredentialsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSourceCredentialsRequest struct {
	Headers ListSourceCredentialsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type ListSourceCredentialsResponse struct {
	ContentType                 string
	InvalidInputException       *interface{}
	ListSourceCredentialsOutput *shared.ListSourceCredentialsOutput
	StatusCode                  int64
}
