package shared

type ListUserTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
