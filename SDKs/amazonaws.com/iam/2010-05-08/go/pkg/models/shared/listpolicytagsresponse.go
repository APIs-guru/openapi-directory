package shared

type ListPolicyTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
