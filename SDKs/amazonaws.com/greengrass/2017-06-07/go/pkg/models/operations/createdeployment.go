package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type CreateDeploymentRequestBodyDeploymentTypeEnum string

const (
	CreateDeploymentRequestBodyDeploymentTypeEnumNewDeployment        CreateDeploymentRequestBodyDeploymentTypeEnum = "NewDeployment"
	CreateDeploymentRequestBodyDeploymentTypeEnumRedeployment         CreateDeploymentRequestBodyDeploymentTypeEnum = "Redeployment"
	CreateDeploymentRequestBodyDeploymentTypeEnumResetDeployment      CreateDeploymentRequestBodyDeploymentTypeEnum = "ResetDeployment"
	CreateDeploymentRequestBodyDeploymentTypeEnumForceResetDeployment CreateDeploymentRequestBodyDeploymentTypeEnum = "ForceResetDeployment"
)

type CreateDeploymentRequestBody struct {
	DeploymentID   *string                                       `json:"DeploymentId,omitempty"`
	DeploymentType CreateDeploymentRequestBodyDeploymentTypeEnum `json:"DeploymentType"`
	GroupVersionID *string                                       `json:"GroupVersionId,omitempty"`
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
