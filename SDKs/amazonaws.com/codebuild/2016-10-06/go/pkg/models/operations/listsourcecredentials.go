package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceCredentialsXAmzTargetEnum string

const (
	ListSourceCredentialsXAmzTargetEnumCodeBuild20161006ListSourceCredentials ListSourceCredentialsXAmzTargetEnum = "CodeBuild_20161006.ListSourceCredentials"
)

type ListSourceCredentialsHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSourceCredentialsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
