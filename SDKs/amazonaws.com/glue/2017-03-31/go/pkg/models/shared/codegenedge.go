package shared

type CodeGenEdge struct {
	Source          string  `json:"Source"`
	Target          string  `json:"Target"`
	TargetParameter *string `json:"TargetParameter"`
}
