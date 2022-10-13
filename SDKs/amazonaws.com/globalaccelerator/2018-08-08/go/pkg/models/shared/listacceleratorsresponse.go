package shared

type ListAcceleratorsResponse struct {
	Accelerators []Accelerator `json:"Accelerators"`
	NextToken    *string       `json:"NextToken"`
}
