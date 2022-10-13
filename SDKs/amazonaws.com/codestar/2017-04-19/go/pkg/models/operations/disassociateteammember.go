package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateTeamMemberXAmzTargetEnum string

const (
	DisassociateTeamMemberXAmzTargetEnumCodeStar20170419DisassociateTeamMember DisassociateTeamMemberXAmzTargetEnum = "CodeStar_20170419.DisassociateTeamMember"
)

type DisassociateTeamMemberHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateTeamMemberXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateTeamMemberRequest struct {
	Headers DisassociateTeamMemberHeaders
	Request shared.DisassociateTeamMemberRequest `request:"mediaType=application/json"`
}

type DisassociateTeamMemberResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DisassociateTeamMemberResult    map[string]interface{}
	InvalidServiceRoleException     *interface{}
	ProjectNotFoundException        *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
