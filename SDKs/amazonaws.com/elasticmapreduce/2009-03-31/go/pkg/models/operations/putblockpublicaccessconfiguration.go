package operations

import (
	"openapi/pkg/models/shared"
)

type PutBlockPublicAccessConfigurationXAmzTargetEnum string

const (
	PutBlockPublicAccessConfigurationXAmzTargetEnumElasticMapReducePutBlockPublicAccessConfiguration PutBlockPublicAccessConfigurationXAmzTargetEnum = "ElasticMapReduce.PutBlockPublicAccessConfiguration"
)

type PutBlockPublicAccessConfigurationHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutBlockPublicAccessConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
