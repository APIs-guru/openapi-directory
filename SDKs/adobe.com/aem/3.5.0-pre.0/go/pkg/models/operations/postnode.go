package operations

type PostNodePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type PostNodeQueryParams struct {
	Operation          *string `queryParam:"style=form,explode=true,name=:operation"`
	DeleteAuthorizable *string `queryParam:"style=form,explode=true,name=deleteAuthorizable"`
}

type PostNodeRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostNodeRequestBody struct {
	File *PostNodeRequestBodyFile `multipartForm:"file"`
}

type PostNodeRequest struct {
	PathParams  PostNodePathParams
	QueryParams PostNodeQueryParams
	Request     *PostNodeRequestBody `request:"mediaType=multipart/form-data"`
}

type PostNodeResponse struct {
	ContentType string
	StatusCode  int64
}
