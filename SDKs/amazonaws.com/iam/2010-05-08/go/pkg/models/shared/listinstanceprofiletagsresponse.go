package shared

type ListInstanceProfileTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
