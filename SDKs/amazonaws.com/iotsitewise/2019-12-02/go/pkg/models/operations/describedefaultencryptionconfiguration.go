package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDefaultEncryptionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
