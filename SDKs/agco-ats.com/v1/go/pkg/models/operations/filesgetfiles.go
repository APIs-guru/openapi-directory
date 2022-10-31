package operations

import (
	"openapi/pkg/models/shared"
)

type FilesGetFilesQueryParams struct {
	IncludeDeleted *bool  `queryParam:"style=form,explode=true,name=includeDeleted"`
	Limit          *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type FilesGetFilesRequest struct {
	QueryParams FilesGetFilesQueryParams
}

type FilesGetFilesResponse struct {
	APIIPagedResponseGlobalResourcesSharedModelsFileDownload *shared.APIIPagedResponseGlobalResourcesSharedModelsFileDownload
	APIModelsAPIError                                        *shared.APIModelsAPIError
	Body                                                     []byte
	ContentType                                              string
	StatusCode                                               int64
}
