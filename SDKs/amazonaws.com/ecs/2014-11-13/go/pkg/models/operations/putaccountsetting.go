package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountSettingXAmzTargetEnum string

const (
	PutAccountSettingXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAccountSetting PutAccountSettingXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.PutAccountSetting"
)

type PutAccountSettingHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAccountSettingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutAccountSettingRequest struct {
	Headers PutAccountSettingHeaders
	Request shared.PutAccountSettingRequest `request:"mediaType=application/json"`
}

type PutAccountSettingResponse struct {
	ClientException           *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	PutAccountSettingResponse *shared.PutAccountSettingResponse
	ServerException           *interface{}
	StatusCode                int64
}
