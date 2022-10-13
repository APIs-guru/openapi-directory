package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlockPublicAccessConfigurationXAmzTargetEnum string

const (
	GetBlockPublicAccessConfigurationXAmzTargetEnumElasticMapReduceGetBlockPublicAccessConfiguration GetBlockPublicAccessConfigurationXAmzTargetEnum = "ElasticMapReduce.GetBlockPublicAccessConfiguration"
)

type GetBlockPublicAccessConfigurationHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBlockPublicAccessConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBlockPublicAccessConfigurationRequest struct {
	Headers GetBlockPublicAccessConfigurationHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetBlockPublicAccessConfigurationResponse struct {
	ContentType                             string
	GetBlockPublicAccessConfigurationOutput *shared.GetBlockPublicAccessConfigurationOutput
	InternalServerException                 *interface{}
	InvalidRequestException                 *interface{}
	StatusCode                              int64
}
