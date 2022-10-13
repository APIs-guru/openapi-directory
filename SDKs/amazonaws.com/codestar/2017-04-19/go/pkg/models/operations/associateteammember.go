package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateTeamMemberXAmzTargetEnum string

const (
	AssociateTeamMemberXAmzTargetEnumCodeStar20170419AssociateTeamMember AssociateTeamMemberXAmzTargetEnum = "CodeStar_20170419.AssociateTeamMember"
)

type AssociateTeamMemberHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateTeamMemberXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateTeamMemberRequest struct {
	Headers AssociateTeamMemberHeaders
	Request shared.AssociateTeamMemberRequest `request:"mediaType=application/json"`
}

type AssociateTeamMemberResponse struct {
	AssociateTeamMemberResult            *shared.AssociateTeamMemberResult
	ConcurrentModificationException      *interface{}
	ContentType                          string
	InvalidServiceRoleException          *interface{}
	LimitExceededException               *interface{}
	ProjectConfigurationException        *interface{}
	ProjectNotFoundException             *interface{}
	StatusCode                           int64
	TeamMemberAlreadyAssociatedException *interface{}
	ValidationException                  *interface{}
}
