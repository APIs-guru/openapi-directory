package shared

type GetExclusionsPreviewResponse struct {
	ExclusionPreviews []ExclusionPreview `json:"exclusionPreviews"`
	NextToken         *string            `json:"nextToken"`
	PreviewStatus     PreviewStatusEnum  `json:"previewStatus"`
}
