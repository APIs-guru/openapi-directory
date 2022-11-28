package shared

type ListServerCertificateTagsResponse struct {
	IsTruncated *bool
	Marker      *string
	Tags        []Tag
}
