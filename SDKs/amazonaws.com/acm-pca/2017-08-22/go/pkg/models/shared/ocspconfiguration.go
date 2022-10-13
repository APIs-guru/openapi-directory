package shared

type OcspConfiguration struct {
	Enabled         bool    `json:"Enabled"`
	OcspCustomCname *string `json:"OcspCustomCname"`
}
