package shared



type GetExclusionsPreviewResponse struct {
    ExclusionPreviews []ExclusionPreview `json:"exclusionPreviews,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PreviewStatus PreviewStatusEnum `json:"previewStatus"`
    
}

