package shared

type ListUploadsRequest struct {
	Arn       string          `json:"arn"`
	NextToken *string         `json:"nextToken,omitempty"`
	Type      *UploadTypeEnum `json:"type,omitempty"`
}
