package operations

import (
	"openapi/pkg/models/shared"
)

type PutPermissionActionGroupEnum string

const (
	PutPermissionActionGroupEnumAgentPermissions PutPermissionActionGroupEnum = "agentPermissions"
)

type PutPermissionPathParams struct {
	ActionGroup        PutPermissionActionGroupEnum `pathParam:"style=simple,explode=false,name=actionGroup"`
	ProfilingGroupName string                       `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type PutPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutPermissionRequestBody struct {
	Principals []string `json:"principals"`
	RevisionID *string  `json:"revisionId"`
}

type PutPermissionRequest struct {
	PathParams PutPermissionPathParams
	Headers    PutPermissionHeaders
	Request    PutPermissionRequestBody `request:"mediaType=application/json"`
}

type PutPermissionResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutPermissionResponse     *shared.PutPermissionResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
