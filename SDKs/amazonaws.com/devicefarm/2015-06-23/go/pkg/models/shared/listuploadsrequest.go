package shared

type ListUploadsRequest struct {
	Arn       string          `json:"arn"`
	NextToken *string         `json:"nextToken"`
	Type      *UploadTypeEnum `json:"type"`
}
