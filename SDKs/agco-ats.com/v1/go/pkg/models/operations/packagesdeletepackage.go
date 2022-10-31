package operations

type PackagesDeletePackagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type PackagesDeletePackageRequest struct {
	PathParams PackagesDeletePackagePathParams
}

type PackagesDeletePackageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
