package operations

import (
	"openapi/pkg/models/shared"
)

type ScanQueryParams struct {
	ExclusiveStartKey *string `queryParam:"style=form,explode=true,name=ExclusiveStartKey"`
	Limit             *string `queryParam:"style=form,explode=true,name=Limit"`
}

type ScanXAmzTargetEnum string

const (
	ScanXAmzTargetEnumDynamoDb20120810Scan ScanXAmzTargetEnum = "DynamoDB_20120810.Scan"
)

type ScanHeaders struct {
	XAmzAlgorithm     *string            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string            `header:"name=X-Amz-Credential"`
	XAmzDate          *string            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ScanXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ScanRequest struct {
	QueryParams ScanQueryParams
	Headers     ScanHeaders
	Request     shared.ScanInput `request:"mediaType=application/json"`
}

type ScanResponse struct {
	ContentType                            string
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	ScanOutput                             *shared.ScanOutput
	StatusCode                             int64
}
