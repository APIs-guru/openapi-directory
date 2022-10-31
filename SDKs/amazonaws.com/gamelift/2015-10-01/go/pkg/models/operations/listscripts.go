package operations

import (
	"openapi/pkg/models/shared"
)

type ListScriptsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListScriptsXAmzTargetEnum string

const (
	ListScriptsXAmzTargetEnumGameLiftListScripts ListScriptsXAmzTargetEnum = "GameLift.ListScripts"
)

type ListScriptsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListScriptsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListScriptsRequest struct {
	QueryParams ListScriptsQueryParams
	Headers     ListScriptsHeaders
	Request     shared.ListScriptsInput `request:"mediaType=application/json"`
}

type ListScriptsResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	ListScriptsOutput        *shared.ListScriptsOutput
	StatusCode               int64
	UnauthorizedException    *interface{}
}
