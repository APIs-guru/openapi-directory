package shared

type ListOpenIDConnectProviderTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
