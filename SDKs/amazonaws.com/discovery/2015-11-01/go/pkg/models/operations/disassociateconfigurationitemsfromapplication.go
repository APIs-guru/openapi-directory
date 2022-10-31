package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateConfigurationItemsFromApplicationXAmzTargetEnum string

const (
	DisassociateConfigurationItemsFromApplicationXAmzTargetEnumAwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication DisassociateConfigurationItemsFromApplicationXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication"
)

type DisassociateConfigurationItemsFromApplicationHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateConfigurationItemsFromApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
