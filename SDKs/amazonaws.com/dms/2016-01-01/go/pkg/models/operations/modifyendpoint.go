package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyEndpointXAmzTargetEnum string

const (
	ModifyEndpointXAmzTargetEnumAmazonDmSv20160101ModifyEndpoint ModifyEndpointXAmzTargetEnum = "AmazonDMSv20160101.ModifyEndpoint"
)

type ModifyEndpointHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyEndpointRequest struct {
	Headers ModifyEndpointHeaders
	Request shared.ModifyEndpointMessage `request:"mediaType=application/json"`
}

type ModifyEndpointResponse struct {
	AccessDeniedFault          *interface{}
	ContentType                string
	InvalidResourceStateFault  *interface{}
	KmsKeyNotAccessibleFault   *interface{}
	ModifyEndpointResponse     *shared.ModifyEndpointResponse
	ResourceAlreadyExistsFault *interface{}
	ResourceNotFoundFault      *interface{}
	StatusCode                 int64
}
