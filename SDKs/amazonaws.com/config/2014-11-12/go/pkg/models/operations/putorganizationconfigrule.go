package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrganizationConfigRuleXAmzTargetEnum string

const (
	PutOrganizationConfigRuleXAmzTargetEnumStarlingDoveServicePutOrganizationConfigRule PutOrganizationConfigRuleXAmzTargetEnum = "StarlingDoveService.PutOrganizationConfigRule"
)

type PutOrganizationConfigRuleHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutOrganizationConfigRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutOrganizationConfigRuleRequest struct {
	Headers PutOrganizationConfigRuleHeaders
	Request shared.PutOrganizationConfigRuleRequest `request:"mediaType=application/json"`
}

type PutOrganizationConfigRuleResponse struct {
	ContentType                                         string
	InsufficientPermissionsException                    *interface{}
	InvalidParameterValueException                      *interface{}
	MaxNumberOfOrganizationConfigRulesExceededException *interface{}
	NoAvailableOrganizationException                    *interface{}
	OrganizationAccessDeniedException                   *interface{}
	OrganizationAllFeaturesNotEnabledException          *interface{}
	PutOrganizationConfigRuleResponse                   *shared.PutOrganizationConfigRuleResponse
	ResourceInUseException                              *interface{}
	StatusCode                                          int64
	ValidationException                                 *interface{}
}
