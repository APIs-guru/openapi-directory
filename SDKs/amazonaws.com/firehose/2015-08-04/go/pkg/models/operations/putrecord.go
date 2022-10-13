package operations

import (
	"openapi/pkg/models/shared"
)

type PutRecordXAmzTargetEnum string

const (
	PutRecordXAmzTargetEnumFirehose20150804PutRecord PutRecordXAmzTargetEnum = "Firehose_20150804.PutRecord"
)

type PutRecordHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRecordXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRecordRequest struct {
	Headers PutRecordHeaders
	Request shared.PutRecordInput `request:"mediaType=application/json"`
}

type PutRecordResponse struct {
	ContentType                 string
	InvalidArgumentException    *interface{}
	InvalidKmsResourceException *interface{}
	PutRecordOutput             *shared.PutRecordOutput
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
