package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAddonPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateAddonHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAddonRequestBodyResolveConflictsEnum string

const (
	CreateAddonRequestBodyResolveConflictsEnumOverwrite CreateAddonRequestBodyResolveConflictsEnum = "OVERWRITE"
	CreateAddonRequestBodyResolveConflictsEnumNone      CreateAddonRequestBodyResolveConflictsEnum = "NONE"
)

type CreateAddonRequestBody struct {
	AddonName             string                                      `json:"addonName"`
	AddonVersion          *string                                     `json:"addonVersion"`
	ClientRequestToken    *string                                     `json:"clientRequestToken"`
	ResolveConflicts      *CreateAddonRequestBodyResolveConflictsEnum `json:"resolveConflicts"`
	ServiceAccountRoleArn *string                                     `json:"serviceAccountRoleArn"`
	Tags                  map[string]string                           `json:"tags"`
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
