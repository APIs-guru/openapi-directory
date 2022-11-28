package shared

// Preset
// Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.
type Preset struct {
	Arn         *string          `json:"Arn,omitempty"`
	Audio       *AudioParameters `json:"Audio,omitempty"`
	Container   *string          `json:"Container,omitempty"`
	Description *string          `json:"Description,omitempty"`
	ID          *string          `json:"Id,omitempty"`
	Name        *string          `json:"Name,omitempty"`
	Thumbnails  *Thumbnails      `json:"Thumbnails,omitempty"`
	Type        *string          `json:"Type,omitempty"`
	Video       *VideoParameters `json:"Video,omitempty"`
}
