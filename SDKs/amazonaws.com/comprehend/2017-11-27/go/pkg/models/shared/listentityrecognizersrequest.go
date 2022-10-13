package shared

type ListEntityRecognizersRequest struct {
	Filter     *EntityRecognizerFilter `json:"Filter"`
	MaxResults *int64                  `json:"MaxResults"`
	NextToken  *string                 `json:"NextToken"`
}
