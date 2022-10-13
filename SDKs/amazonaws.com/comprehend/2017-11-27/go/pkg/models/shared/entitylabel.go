package shared

type EntityLabel struct {
	Name  *PiiEntityTypeEnum `json:"Name"`
	Score *float32           `json:"Score"`
}
