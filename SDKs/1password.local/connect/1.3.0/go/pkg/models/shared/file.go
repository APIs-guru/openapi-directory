package shared

// FileSection
// For files that are in a section, this field describes the section.
type FileSection struct {
	ID *string `json:"id,omitempty"`
}

type FileInput struct {
	Content *string      `json:"content,omitempty"`
	ID      *string      `json:"id,omitempty"`
	Name    *string      `json:"name,omitempty"`
	Section *FileSection `json:"section,omitempty"`
	Size    *int64       `json:"size,omitempty"`
}

type File struct {
	Content     *string      `json:"content,omitempty"`
	ContentPath *string      `json:"content_path,omitempty"`
	ID          *string      `json:"id,omitempty"`
	Name        *string      `json:"name,omitempty"`
	Section     *FileSection `json:"section,omitempty"`
	Size        *int64       `json:"size,omitempty"`
}
