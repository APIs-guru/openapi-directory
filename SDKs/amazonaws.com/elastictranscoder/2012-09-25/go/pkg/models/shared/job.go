package shared



type Job struct {
    Arn *string `json:"Arn,omitempty"`
    ID *string `json:"Id,omitempty"`
    Input *JobInput `json:"Input,omitempty"`
    Inputs []JobInput `json:"Inputs,omitempty"`
    Output *JobOutput `json:"Output,omitempty"`
    OutputKeyPrefix *string `json:"OutputKeyPrefix,omitempty"`
    Outputs []JobOutput `json:"Outputs,omitempty"`
    PipelineID *string `json:"PipelineId,omitempty"`
    Playlists []Playlist `json:"Playlists,omitempty"`
    Status *string `json:"Status,omitempty"`
    Timing *Timing `json:"Timing,omitempty"`
    UserMetadata map[string]string `json:"UserMetadata,omitempty"`
    
}

