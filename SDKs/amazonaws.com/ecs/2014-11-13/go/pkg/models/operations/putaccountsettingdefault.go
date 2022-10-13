package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountSettingDefaultXAmzTargetEnum string

const (
	PutAccountSettingDefaultXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAccountSettingDefault PutAccountSettingDefaultXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault"
)

type PutAccountSettingDefaultHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAccountSettingDefaultXAmzTargetEnum `header:"name=X-Amz-Target"`
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
