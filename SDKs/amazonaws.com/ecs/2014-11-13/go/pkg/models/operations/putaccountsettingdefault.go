package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountSettingDefaultXAmzTargetEnum string

const (
	PutAccountSettingDefaultXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAccountSettingDefault PutAccountSettingDefaultXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault"
)

type PutAccountSettingDefaultHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAccountSettingDefaultXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutAccountSettingDefaultRequest struct {
	Headers PutAccountSettingDefaultHeaders
	Request shared.PutAccountSettingDefaultRequest `request:"mediaType=application/json"`
}

type PutAccountSettingDefaultResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	InvalidParameterException        *interface{}
	PutAccountSettingDefaultResponse *shared.PutAccountSettingDefaultResponse
	ServerException                  *interface{}
	StatusCode                       int64
}
