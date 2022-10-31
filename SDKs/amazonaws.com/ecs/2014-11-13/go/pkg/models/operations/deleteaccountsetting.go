package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountSettingXAmzTargetEnum string

const (
	DeleteAccountSettingXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteAccountSetting DeleteAccountSettingXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting"
)

type DeleteAccountSettingHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAccountSettingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteAccountSettingRequest struct {
	Headers DeleteAccountSettingHeaders
	Request shared.DeleteAccountSettingRequest `request:"mediaType=application/json"`
}

type DeleteAccountSettingResponse struct {
	ClientException              *interface{}
	ContentType                  string
	DeleteAccountSettingResponse *shared.DeleteAccountSettingResponse
	InvalidParameterException    *interface{}
	ServerException              *interface{}
	StatusCode                   int64
}
