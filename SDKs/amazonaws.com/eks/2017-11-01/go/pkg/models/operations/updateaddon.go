package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAddonPathParams struct {
	AddonName string `pathParam:"style=simple,explode=false,name=addonName"`
	Name      string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateAddonHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAddonRequestBodyResolveConflictsEnum string

const (
	UpdateAddonRequestBodyResolveConflictsEnumOverwrite UpdateAddonRequestBodyResolveConflictsEnum = "OVERWRITE"
	UpdateAddonRequestBodyResolveConflictsEnumNone      UpdateAddonRequestBodyResolveConflictsEnum = "NONE"
)

type UpdateAddonRequestBody struct {
	AddonVersion          *string                                     `json:"addonVersion,omitempty"`
	ClientRequestToken    *string                                     `json:"clientRequestToken,omitempty"`
	ResolveConflicts      *UpdateAddonRequestBodyResolveConflictsEnum `json:"resolveConflicts,omitempty"`
	ServiceAccountRoleArn *string                                     `json:"serviceAccountRoleArn,omitempty"`
}

type UpdateAddonRequest struct {
	PathParams UpdateAddonPathParams
	Headers    UpdateAddonHeaders
	Request    UpdateAddonRequestBody `request:"mediaType=application/json"`
}

type UpdateAddonResponse struct {
	ClientException           *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	ServerException           *interface{}
	StatusCode                int64
	UpdateAddonResponse       *shared.UpdateAddonResponse
}
