package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateConfigurationItemsFromApplicationXAmzTargetEnum string

const (
	DisassociateConfigurationItemsFromApplicationXAmzTargetEnumAwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication DisassociateConfigurationItemsFromApplicationXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication"
)

type DisassociateConfigurationItemsFromApplicationHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateConfigurationItemsFromApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateConfigurationItemsFromApplicationRequest struct {
	Headers DisassociateConfigurationItemsFromApplicationHeaders
	Request shared.DisassociateConfigurationItemsFromApplicationRequest `request:"mediaType=application/json"`
}

type DisassociateConfigurationItemsFromApplicationResponse struct {
	AuthorizationErrorException                           *interface{}
	ContentType                                           string
	DisassociateConfigurationItemsFromApplicationResponse map[string]interface{}
	HomeRegionNotSetException                             *interface{}
	InvalidParameterException                             *interface{}
	InvalidParameterValueException                        *interface{}
	ServerInternalErrorException                          *interface{}
	StatusCode                                            int64
}
