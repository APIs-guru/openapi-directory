package operations

type ReleasePostReleaseBundlePathParams struct {
	BundleID  string `pathParam:"style=simple,explode=false,name=BundleId"`
	ReleaseID int32  `pathParam:"style=simple,explode=false,name=ReleaseId"`
}

type ReleasePostReleaseBundleRequest struct {
	PathParams ReleasePostReleaseBundlePathParams
}

type ReleasePostReleaseBundleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
