package operations

import (
	"openapi/pkg/models/shared"
)

type ListPermissionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPermissionsXAmzTargetEnum string

const (
	ListPermissionsXAmzTargetEnumAcmPrivateCaListPermissions ListPermissionsXAmzTargetEnum = "ACMPrivateCA.ListPermissions"
)

type ListPermissionsHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListPermissionsRequest struct {
	QueryParams ListPermissionsQueryParams
	Headers     ListPermissionsHeaders
	Request     shared.ListPermissionsRequest `request:"mediaType=application/json"`
}

type ListPermissionsResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidNextTokenException *interface{}
	InvalidStateException     *interface{}
	ListPermissionsResponse   *shared.ListPermissionsResponse
	RequestFailedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
