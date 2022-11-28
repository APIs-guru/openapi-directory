package shared

// AddTagsToResourceMessage
// Associates a set of tags with an DMS resource.
type AddTagsToResourceMessage struct {
	ResourceArn string `json:"ResourceArn"`
	Tags        []Tag  `json:"Tags"`
}
