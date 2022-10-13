package operations

import (
	"openapi/pkg/models/shared"
)

type PutConfigRuleXAmzTargetEnum string

const (
	PutConfigRuleXAmzTargetEnumStarlingDoveServicePutConfigRule PutConfigRuleXAmzTargetEnum = "StarlingDoveService.PutConfigRule"
)

type PutConfigRuleHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutConfigRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutConfigRuleRequest struct {
	Headers PutConfigRuleHeaders
	Request shared.PutConfigRuleRequest `request:"mediaType=application/json"`
}

type PutConfigRuleResponse struct {
	ContentType                               string
	InsufficientPermissionsException          *interface{}
	InvalidParameterValueException            *interface{}
	MaxNumberOfConfigRulesExceededException   *interface{}
	NoAvailableConfigurationRecorderException *interface{}
	ResourceInUseException                    *interface{}
	StatusCode                                int64
}
