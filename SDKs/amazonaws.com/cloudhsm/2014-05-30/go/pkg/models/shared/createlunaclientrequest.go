package shared

type CreateLunaClientRequest struct {
	Certificate string  `json:"Certificate"`
	Label       *string `json:"Label"`
}
