package operations

type ContentReleaseDeleteContentReleaseVersionnPathParams struct {
	ContentReleaseID int32 `pathParam:"style=simple,explode=false,name=ContentReleaseId"`
}

type ContentReleaseDeleteContentReleaseVersionnRequest struct {
	PathParams ContentReleaseDeleteContentReleaseVersionnPathParams
}

type ContentReleaseDeleteContentReleaseVersionnResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
