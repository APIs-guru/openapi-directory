package operations

import (
	"openapi/pkg/models/shared"
)

type PutBlockPublicAccessConfigurationXAmzTargetEnum string

const (
	PutBlockPublicAccessConfigurationXAmzTargetEnumElasticMapReducePutBlockPublicAccessConfiguration PutBlockPublicAccessConfigurationXAmzTargetEnum = "ElasticMapReduce.PutBlockPublicAccessConfiguration"
)

type PutBlockPublicAccessConfigurationHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutBlockPublicAccessConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutBlockPublicAccessConfigurationRequest struct {
	Headers PutBlockPublicAccessConfigurationHeaders
	Request shared.PutBlockPublicAccessConfigurationInput `request:"mediaType=application/json"`
}

type PutBlockPublicAccessConfigurationResponse struct {
	ContentType                             string
	InternalServerException                 *interface{}
	InvalidRequestException                 *interface{}
	PutBlockPublicAccessConfigurationOutput map[string]interface{}
	StatusCode                              int64
}
