package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSecurityConfigurationXAmzTargetEnum string

const (
	DeleteSecurityConfigurationXAmzTargetEnumElasticMapReduceDeleteSecurityConfiguration DeleteSecurityConfigurationXAmzTargetEnum = "ElasticMapReduce.DeleteSecurityConfiguration"
)

type DeleteSecurityConfigurationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSecurityConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteSecurityConfigurationRequest struct {
	Headers DeleteSecurityConfigurationHeaders
	Request shared.DeleteSecurityConfigurationInput `request:"mediaType=application/json"`
}

type DeleteSecurityConfigurationResponse struct {
	ContentType                       string
	DeleteSecurityConfigurationOutput map[string]interface{}
	InternalServerException           *interface{}
	InvalidRequestException           *interface{}
	StatusCode                        int64
}
