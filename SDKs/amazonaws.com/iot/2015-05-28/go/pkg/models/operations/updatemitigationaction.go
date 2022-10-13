package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMitigationActionPathParams struct {
	ActionName string `pathParam:"style=simple,explode=false,name=actionName"`
}

type UpdateMitigationActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateMitigationActionRequestBodyActionParams struct {
	AddThingsToThingGroupParams       *shared.AddThingsToThingGroupParams       `json:"addThingsToThingGroupParams"`
	EnableIoTLoggingParams            *shared.EnableIoTLoggingParams            `json:"enableIoTLoggingParams"`
	PublishFindingToSnsParams         *shared.PublishFindingToSnsParams         `json:"publishFindingToSnsParams"`
	ReplaceDefaultPolicyVersionParams *shared.ReplaceDefaultPolicyVersionParams `json:"replaceDefaultPolicyVersionParams"`
	UpdateCaCertificateParams         *shared.UpdateCaCertificateParams         `json:"updateCACertificateParams"`
	UpdateDeviceCertificateParams     *shared.UpdateDeviceCertificateParams     `json:"updateDeviceCertificateParams"`
}

type UpdateMitigationActionRequestBody struct {
	ActionParams *UpdateMitigationActionRequestBodyActionParams `json:"actionParams"`
	RoleArn      *string                                        `json:"roleArn"`
}

type UpdateMitigationActionRequest struct {
	PathParams UpdateMitigationActionPathParams
	Headers    UpdateMitigationActionHeaders
	Request    UpdateMitigationActionRequestBody `request:"mediaType=application/json"`
}

type UpdateMitigationActionResponse struct {
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateMitigationActionResponse *shared.UpdateMitigationActionResponse
}
