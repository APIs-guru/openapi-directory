package shared

type Job struct {
	Arn             *string           `json:"Arn"`
	ID              *string           `json:"Id"`
	Input           *JobInput         `json:"Input"`
	Inputs          []JobInput        `json:"Inputs"`
	Output          *JobOutput        `json:"Output"`
	OutputKeyPrefix *string           `json:"OutputKeyPrefix"`
	Outputs         []JobOutput       `json:"Outputs"`
	PipelineID      *string           `json:"PipelineId"`
	Playlists       []Playlist        `json:"Playlists"`
	Status          *string           `json:"Status"`
	Timing          *Timing           `json:"Timing"`
	UserMetadata    map[string]string `json:"UserMetadata"`
}
