package operations

import (
	"openapi/pkg/models/shared"
)

type TestConnectionXAmzTargetEnum string

const (
	TestConnectionXAmzTargetEnumAmazonDmSv20160101TestConnection TestConnectionXAmzTargetEnum = "AmazonDMSv20160101.TestConnection"
)

type TestConnectionHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TestConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TestConnectionRequest struct {
	Headers TestConnectionHeaders
	Request shared.TestConnectionMessage `request:"mediaType=application/json"`
}

type TestConnectionResponse struct {
	AccessDeniedFault          *interface{}
	ContentType                string
	InvalidResourceStateFault  *interface{}
	KmsKeyNotAccessibleFault   *interface{}
	ResourceNotFoundFault      *interface{}
	ResourceQuotaExceededFault *interface{}
	StatusCode                 int64
	TestConnectionResponse     *shared.TestConnectionResponse
}
