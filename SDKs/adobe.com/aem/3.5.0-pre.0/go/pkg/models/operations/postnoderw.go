package operations

type PostNodeRwPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type PostNodeRwQueryParams struct {
	AddMembers *string `queryParam:"style=form,explode=true,name=addMembers"`
}

type PostNodeRwRequest struct {
	PathParams  PostNodeRwPathParams
	QueryParams PostNodeRwQueryParams
}

type PostNodeRwResponse struct {
	ContentType string
	StatusCode  int64
}
