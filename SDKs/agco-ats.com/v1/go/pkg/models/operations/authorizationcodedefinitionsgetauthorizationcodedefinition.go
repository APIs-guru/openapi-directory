package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams struct {
	CategoryID      *string `queryParam:"style=form,explode=true,name=categoryID"`
	CreatedByUserID *int32  `queryParam:"style=form,explode=true,name=createdByUserID"`
	DeletedByUserID *int32  `queryParam:"style=form,explode=true,name=deletedByUserID"`
	IncludeDeleted  *bool   `queryParam:"style=form,explode=true,name=includeDeleted"`
	Limit           *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name            *string `queryParam:"style=form,explode=true,name=name"`
	Offset          *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest struct {
	QueryParams AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams
}

type AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse struct {
	APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition *shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition
	APIModelsAPIError                                                          *shared.APIModelsAPIError
	Body                                                                       []byte
	ContentType                                                                string
	StatusCode                                                                 int64
}
