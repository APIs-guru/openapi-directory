package operations

type GetNodePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetNodeRequest struct {
	PathParams GetNodePathParams
}

type GetNodeResponse struct {
	ContentType string
	StatusCode  int64
}
