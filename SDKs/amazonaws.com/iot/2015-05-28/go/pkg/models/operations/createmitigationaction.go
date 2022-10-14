package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMitigationActionPathParams struct {
	ActionName string `pathParam:"style=simple,explode=false,name=actionName"`
}

type CreateMitigationActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMitigationActionRequestBodyActionParams struct {
	AddThingsToThingGroupParams       *shared.AddThingsToThingGroupParams       `json:"addThingsToThingGroupParams,omitempty"`
	EnableIoTLoggingParams            *shared.EnableIoTLoggingParams            `json:"enableIoTLoggingParams,omitempty"`
	PublishFindingToSnsParams         *shared.PublishFindingToSnsParams         `json:"publishFindingToSnsParams,omitempty"`
	ReplaceDefaultPolicyVersionParams *shared.ReplaceDefaultPolicyVersionParams `json:"replaceDefaultPolicyVersionParams,omitempty"`
	UpdateCaCertificateParams         *shared.UpdateCaCertificateParams         `json:"updateCACertificateParams,omitempty"`
	UpdateDeviceCertificateParams     *shared.UpdateDeviceCertificateParams     `json:"updateDeviceCertificateParams,omitempty"`
}

type CreateMitigationActionRequestBody struct {
	ActionParams CreateMitigationActionRequestBodyActionParams `json:"actionParams"`
	RoleArn      string                                        `json:"roleArn"`
	Tags         []shared.Tag                                  `json:"tags,omitempty"`
}

type CreateMitigationActionRequest struct {
	PathParams CreateMitigationActionPathParams
	Headers    CreateMitigationActionHeaders
	Request    CreateMitigationActionRequestBody `request:"mediaType=application/json"`
}

type CreateMitigationActionResponse struct {
	ContentType                    string
	CreateMitigationActionResponse *shared.CreateMitigationActionResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
