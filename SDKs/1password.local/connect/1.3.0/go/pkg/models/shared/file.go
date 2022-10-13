package shared

type FileSection struct {
	ID *string `json:"id"`
}

type File struct {
	Content     *string      `json:"content"`
	ContentPath *string      `json:"content_path"`
	ID          *string      `json:"id"`
	Name        *string      `json:"name"`
	Section     *FileSection `json:"section"`
	Size        *int64       `json:"size"`
}
