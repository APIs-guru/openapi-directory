package shared

type DescribeImagesRequest struct {
	Arns       []string            `json:"Arns"`
	MaxResults *int64              `json:"MaxResults"`
	Names      []string            `json:"Names"`
	NextToken  *string             `json:"NextToken"`
	Type       *VisibilityTypeEnum `json:"Type"`
}
