package shared

type ListRoleTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
