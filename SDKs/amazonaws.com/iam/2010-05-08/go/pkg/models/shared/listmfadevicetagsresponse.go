package shared

type ListMfaDeviceTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
