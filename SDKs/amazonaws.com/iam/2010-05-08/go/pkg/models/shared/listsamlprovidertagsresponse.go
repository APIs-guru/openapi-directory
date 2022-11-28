package shared

type ListSamlProviderTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
