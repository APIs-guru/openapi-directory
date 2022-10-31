package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAddonPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateAddonHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAddonRequestBodyResolveConflictsEnum string

const (
	CreateAddonRequestBodyResolveConflictsEnumOverwrite CreateAddonRequestBodyResolveConflictsEnum = "OVERWRITE"
	CreateAddonRequestBodyResolveConflictsEnumNone      CreateAddonRequestBodyResolveConflictsEnum = "NONE"
)

type CreateAddonRequestBody struct {
	AddonName             string                                      `json:"addonName"`
	AddonVersion          *string                                     `json:"addonVersion,omitempty"`
	ClientRequestToken    *string                                     `json:"clientRequestToken,omitempty"`
	ResolveConflicts      *CreateAddonRequestBodyResolveConflictsEnum `json:"resolveConflicts,omitempty"`
	ServiceAccountRoleArn *string                                     `json:"serviceAccountRoleArn,omitempty"`
	Tags                  map[string]string                           `json:"tags,omitempty"`
}

type CreateAddonRequest struct {
	PathParams CreateAddonPathParams
	Headers    CreateAddonHeaders
	Request    CreateAddonRequestBody `request:"mediaType=application/json"`
}

type CreateAddonResponse struct {
	ClientException           *interface{}
	ContentType               string
	CreateAddonResponse       *shared.CreateAddonResponse
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
