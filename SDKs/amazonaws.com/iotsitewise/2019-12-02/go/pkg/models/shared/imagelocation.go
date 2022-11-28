package shared

// ImageLocation
// Contains an image that is uploaded to IoT SiteWise and available at a URL.
type ImageLocation struct {
	ID  string `json:"id"`
	URL string `json:"url"`
}
