package shared

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
