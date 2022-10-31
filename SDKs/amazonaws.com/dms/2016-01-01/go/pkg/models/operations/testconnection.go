package operations

import (
	"openapi/pkg/models/shared"
)

type TestConnectionXAmzTargetEnum string

const (
	TestConnectionXAmzTargetEnumAmazonDmSv20160101TestConnection TestConnectionXAmzTargetEnum = "AmazonDMSv20160101.TestConnection"
)

type TestConnectionHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TestConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
