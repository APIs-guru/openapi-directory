package operations

import (
	"openapi/pkg/models/shared"
)

type ListTeamMembersXAmzTargetEnum string

const (
	ListTeamMembersXAmzTargetEnumCodeStar20170419ListTeamMembers ListTeamMembersXAmzTargetEnum = "CodeStar_20170419.ListTeamMembers"
)

type ListTeamMembersHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTeamMembersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTeamMembersRequest struct {
	Headers ListTeamMembersHeaders
	Request shared.ListTeamMembersRequest `request:"mediaType=application/json"`
}

type ListTeamMembersResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListTeamMembersResult     *shared.ListTeamMembersResult
	ProjectNotFoundException  *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
