package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrganizationConfigRuleXAmzTargetEnum string

const (
	PutOrganizationConfigRuleXAmzTargetEnumStarlingDoveServicePutOrganizationConfigRule PutOrganizationConfigRuleXAmzTargetEnum = "StarlingDoveService.PutOrganizationConfigRule"
)

type PutOrganizationConfigRuleHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutOrganizationConfigRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
