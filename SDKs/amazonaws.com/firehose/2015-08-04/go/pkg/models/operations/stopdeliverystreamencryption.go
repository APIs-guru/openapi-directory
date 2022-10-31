package operations

import (
	"openapi/pkg/models/shared"
)

type StopDeliveryStreamEncryptionXAmzTargetEnum string

const (
	StopDeliveryStreamEncryptionXAmzTargetEnumFirehose20150804StopDeliveryStreamEncryption StopDeliveryStreamEncryptionXAmzTargetEnum = "Firehose_20150804.StopDeliveryStreamEncryption"
)

type StopDeliveryStreamEncryptionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopDeliveryStreamEncryptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopDeliveryStreamEncryptionRequest struct {
	Headers StopDeliveryStreamEncryptionHeaders
	Request shared.StopDeliveryStreamEncryptionInput `request:"mediaType=application/json"`
}

type StopDeliveryStreamEncryptionResponse struct {
	ContentType                        string
	InvalidArgumentException           *interface{}
	LimitExceededException             *interface{}
	ResourceInUseException             *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	StopDeliveryStreamEncryptionOutput map[string]interface{}
}
