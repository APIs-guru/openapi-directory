package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizationTokenXAmzTargetEnum string

const (
	GetAuthorizationTokenXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetAuthorizationToken GetAuthorizationTokenXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken"
)

type GetAuthorizationTokenHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAuthorizationTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAuthorizationTokenRequest struct {
	Headers GetAuthorizationTokenHeaders
	Request shared.GetAuthorizationTokenRequest `request:"mediaType=application/json"`
}

type GetAuthorizationTokenResponse struct {
	ContentType                   string
	GetAuthorizationTokenResponse *shared.GetAuthorizationTokenResponse
	InvalidParameterException     *interface{}
	ServerException               *interface{}
	StatusCode                    int64
}
