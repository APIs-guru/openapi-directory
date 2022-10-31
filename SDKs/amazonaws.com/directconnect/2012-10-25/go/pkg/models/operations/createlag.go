package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLagXAmzTargetEnum string

const (
	CreateLagXAmzTargetEnumOvertureServiceCreateLag CreateLagXAmzTargetEnum = "OvertureService.CreateLag"
)

type CreateLagHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLagXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateLagRequest struct {
	Headers CreateLagHeaders
	Request shared.CreateLagRequest `request:"mediaType=application/json"`
}

type CreateLagResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	Lag                          *shared.Lag
	StatusCode                   int64
	TooManyTagsException         *interface{}
}
