package operations

type DeleteNodePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type DeleteNodeRequest struct {
	PathParams DeleteNodePathParams
}

type DeleteNodeResponse struct {
	ContentType string
	StatusCode  int64
}
