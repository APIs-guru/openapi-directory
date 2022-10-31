package shared

type TagResourceRequest struct {
	ResourceArn string         `json:"ResourceArn"`
	Tags        []TagListEntry `json:"Tags"`
}
