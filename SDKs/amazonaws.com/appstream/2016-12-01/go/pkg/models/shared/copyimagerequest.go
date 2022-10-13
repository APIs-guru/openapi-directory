package shared

type CopyImageRequest struct {
	DestinationImageDescription *string `json:"DestinationImageDescription"`
	DestinationImageName        string  `json:"DestinationImageName"`
	DestinationRegion           string  `json:"DestinationRegion"`
	SourceImageName             string  `json:"SourceImageName"`
}
