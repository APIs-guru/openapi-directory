package operations

type GlobalImagesDeleteFilePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type GlobalImagesDeleteFileRequest struct {
	PathParams GlobalImagesDeleteFilePathParams
}

type GlobalImagesDeleteFileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
