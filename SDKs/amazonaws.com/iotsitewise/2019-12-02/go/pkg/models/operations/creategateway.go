package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateGatewayRequestBodyGatewayPlatform struct {
	Greengrass   *shared.Greengrass   `json:"greengrass"`
	GreengrassV2 *shared.GreengrassV2 `json:"greengrassV2"`
}

type CreateGatewayRequestBody struct {
	GatewayName     string                                  `json:"gatewayName"`
	GatewayPlatform CreateGatewayRequestBodyGatewayPlatform `json:"gatewayPlatform"`
	Tags            map[string]string                       `json:"tags"`
}

type CreateGatewayRequest struct {
	Headers CreateGatewayHeaders
	Request CreateGatewayRequestBody `request:"mediaType=application/json"`
}

type CreateGatewayResponse struct {
	ContentType                    string
	CreateGatewayResponse          *shared.CreateGatewayResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
