package operations

type PriorityPackagesDeletePriorityPackagesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type PriorityPackagesDeletePriorityPackagesRequest struct {
	PathParams PriorityPackagesDeletePriorityPackagesPathParams
}

type PriorityPackagesDeletePriorityPackagesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
