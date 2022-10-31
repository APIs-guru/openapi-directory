package operations

type ReleaseDeleteReleaseBundlePathParams struct {
	BundleID  string `pathParam:"style=simple,explode=false,name=BundleId"`
	ReleaseID int32  `pathParam:"style=simple,explode=false,name=ReleaseId"`
}

type ReleaseDeleteReleaseBundleRequest struct {
	PathParams ReleaseDeleteReleaseBundlePathParams
}

type ReleaseDeleteReleaseBundleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
