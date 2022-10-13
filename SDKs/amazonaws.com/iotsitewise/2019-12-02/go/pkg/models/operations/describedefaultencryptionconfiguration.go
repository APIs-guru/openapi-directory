package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDefaultEncryptionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDefaultEncryptionConfigurationRequest struct {
	Headers DescribeDefaultEncryptionConfigurationHeaders
}

type DescribeDefaultEncryptionConfigurationResponse struct {
	ContentType                                    string
	DescribeDefaultEncryptionConfigurationResponse *shared.DescribeDefaultEncryptionConfigurationResponse
	InternalFailureException                       *interface{}
	InvalidRequestException                        *interface{}
	StatusCode                                     int64
	ThrottlingException                            *interface{}
}
