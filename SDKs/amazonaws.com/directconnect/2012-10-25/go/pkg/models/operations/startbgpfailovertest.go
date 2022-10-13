package operations

import (
	"openapi/pkg/models/shared"
)

type StartBgpFailoverTestXAmzTargetEnum string

const (
	StartBgpFailoverTestXAmzTargetEnumOvertureServiceStartBgpFailoverTest StartBgpFailoverTestXAmzTargetEnum = "OvertureService.StartBgpFailoverTest"
)

type StartBgpFailoverTestHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartBgpFailoverTestXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartBgpFailoverTestRequest struct {
	Headers StartBgpFailoverTestHeaders
	Request shared.StartBgpFailoverTestRequest `request:"mediaType=application/json"`
}

type StartBgpFailoverTestResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StartBgpFailoverTestResponse *shared.StartBgpFailoverTestResponse
	StatusCode                   int64
}
