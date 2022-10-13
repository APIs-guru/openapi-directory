package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateDeploymentRequestBodyDeploymentTypeEnum string

const (
	CreateDeploymentRequestBodyDeploymentTypeEnumNewDeployment        CreateDeploymentRequestBodyDeploymentTypeEnum = "NewDeployment"
	CreateDeploymentRequestBodyDeploymentTypeEnumRedeployment         CreateDeploymentRequestBodyDeploymentTypeEnum = "Redeployment"
	CreateDeploymentRequestBodyDeploymentTypeEnumResetDeployment      CreateDeploymentRequestBodyDeploymentTypeEnum = "ResetDeployment"
	CreateDeploymentRequestBodyDeploymentTypeEnumForceResetDeployment CreateDeploymentRequestBodyDeploymentTypeEnum = "ForceResetDeployment"
)

type CreateDeploymentRequestBody struct {
	DeploymentID   *string                                       `json:"DeploymentId"`
	DeploymentType CreateDeploymentRequestBodyDeploymentTypeEnum `json:"DeploymentType"`
	GroupVersionID *string                                       `json:"GroupVersionId"`
}

type CreateDeploymentRequest struct {
	PathParams CreateDeploymentPathParams
	Headers    CreateDeploymentHeaders
	Request    CreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateDeploymentResponse *shared.CreateDeploymentResponse
	StatusCode               int64
}
