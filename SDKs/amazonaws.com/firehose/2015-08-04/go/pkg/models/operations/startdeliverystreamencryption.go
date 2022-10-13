package operations

import (
	"openapi/pkg/models/shared"
)

type StartDeliveryStreamEncryptionXAmzTargetEnum string

const (
	StartDeliveryStreamEncryptionXAmzTargetEnumFirehose20150804StartDeliveryStreamEncryption StartDeliveryStreamEncryptionXAmzTargetEnum = "Firehose_20150804.StartDeliveryStreamEncryption"
)

type StartDeliveryStreamEncryptionHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDeliveryStreamEncryptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartDeliveryStreamEncryptionRequest struct {
	Headers StartDeliveryStreamEncryptionHeaders
	Request shared.StartDeliveryStreamEncryptionInput `request:"mediaType=application/json"`
}

type StartDeliveryStreamEncryptionResponse struct {
	ContentType                         string
	InvalidArgumentException            *interface{}
	InvalidKmsResourceException         *interface{}
	LimitExceededException              *interface{}
	ResourceInUseException              *interface{}
	ResourceNotFoundException           *interface{}
	StartDeliveryStreamEncryptionOutput map[string]interface{}
	StatusCode                          int64
}
