package shared

type Preset struct {
	Arn         *string          `json:"Arn"`
	Audio       *AudioParameters `json:"Audio"`
	Container   *string          `json:"Container"`
	Description *string          `json:"Description"`
	ID          *string          `json:"Id"`
	Name        *string          `json:"Name"`
	Thumbnails  *Thumbnails      `json:"Thumbnails"`
	Type        *string          `json:"Type"`
	Video       *VideoParameters `json:"Video"`
}
