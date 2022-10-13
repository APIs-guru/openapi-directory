package operations

type ActivitiesDeleteActivityPathParams struct {
	ActivityID int32 `pathParam:"style=simple,explode=false,name=activityID"`
}

type ActivitiesDeleteActivityRequest struct {
	PathParams ActivitiesDeleteActivityPathParams
}

type ActivitiesDeleteActivityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
