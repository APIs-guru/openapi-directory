package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTeamMemberXAmzTargetEnum string

const (
	UpdateTeamMemberXAmzTargetEnumCodeStar20170419UpdateTeamMember UpdateTeamMemberXAmzTargetEnum = "CodeStar_20170419.UpdateTeamMember"
)

type UpdateTeamMemberHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTeamMemberXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTeamMemberRequest struct {
	Headers UpdateTeamMemberHeaders
	Request shared.UpdateTeamMemberRequest `request:"mediaType=application/json"`
}

type UpdateTeamMemberResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidServiceRoleException     *interface{}
	LimitExceededException          *interface{}
	ProjectConfigurationException   *interface{}
	ProjectNotFoundException        *interface{}
	StatusCode                      int64
	TeamMemberNotFoundException     *interface{}
	UpdateTeamMemberResult          *shared.UpdateTeamMemberResult
	ValidationException             *interface{}
}
