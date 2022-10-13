package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVpcLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateVpcLinkRequestBody struct {
	Name             string            `json:"name"`
	SecurityGroupIds []string          `json:"securityGroupIds"`
	SubnetIds        []string          `json:"subnetIds"`
	Tags             map[string]string `json:"tags"`
}

type CreateVpcLinkRequest struct {
	Headers CreateVpcLinkHeaders
	Request CreateVpcLinkRequestBody `request:"mediaType=application/json"`
}

type CreateVpcLinkResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateVpcLinkResponse    *shared.CreateVpcLinkResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
}
