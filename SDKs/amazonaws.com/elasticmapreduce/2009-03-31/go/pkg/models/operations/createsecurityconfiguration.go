package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSecurityConfigurationXAmzTargetEnum string

const (
	CreateSecurityConfigurationXAmzTargetEnumElasticMapReduceCreateSecurityConfiguration CreateSecurityConfigurationXAmzTargetEnum = "ElasticMapReduce.CreateSecurityConfiguration"
)

type CreateSecurityConfigurationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSecurityConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateSecurityConfigurationRequest struct {
	Headers CreateSecurityConfigurationHeaders
	Request shared.CreateSecurityConfigurationInput `request:"mediaType=application/json"`
}

type CreateSecurityConfigurationResponse struct {
	ContentType                       string
	CreateSecurityConfigurationOutput *shared.CreateSecurityConfigurationOutput
	InternalServerException           *interface{}
	InvalidRequestException           *interface{}
	StatusCode                        int64
}
