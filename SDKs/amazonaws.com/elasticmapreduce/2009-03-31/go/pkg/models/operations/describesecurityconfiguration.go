package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSecurityConfigurationXAmzTargetEnum string

const (
	DescribeSecurityConfigurationXAmzTargetEnumElasticMapReduceDescribeSecurityConfiguration DescribeSecurityConfigurationXAmzTargetEnum = "ElasticMapReduce.DescribeSecurityConfiguration"
)

type DescribeSecurityConfigurationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSecurityConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeSecurityConfigurationRequest struct {
	Headers DescribeSecurityConfigurationHeaders
	Request shared.DescribeSecurityConfigurationInput `request:"mediaType=application/json"`
}

type DescribeSecurityConfigurationResponse struct {
	ContentType                         string
	DescribeSecurityConfigurationOutput *shared.DescribeSecurityConfigurationOutput
	InternalServerException             *interface{}
	InvalidRequestException             *interface{}
	StatusCode                          int64
}
