package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateConfigurationItemsToApplicationXAmzTargetEnum string

const (
	AssociateConfigurationItemsToApplicationXAmzTargetEnumAwsPoseidonServiceV20151101AssociateConfigurationItemsToApplication AssociateConfigurationItemsToApplicationXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication"
)

type AssociateConfigurationItemsToApplicationHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateConfigurationItemsToApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateConfigurationItemsToApplicationRequest struct {
	Headers AssociateConfigurationItemsToApplicationHeaders
	Request shared.AssociateConfigurationItemsToApplicationRequest `request:"mediaType=application/json"`
}

type AssociateConfigurationItemsToApplicationResponse struct {
	AssociateConfigurationItemsToApplicationResponse map[string]interface{}
	AuthorizationErrorException                      *interface{}
	ContentType                                      string
	HomeRegionNotSetException                        *interface{}
	InvalidParameterException                        *interface{}
	InvalidParameterValueException                   *interface{}
	ServerInternalErrorException                     *interface{}
	StatusCode                                       int64
}
