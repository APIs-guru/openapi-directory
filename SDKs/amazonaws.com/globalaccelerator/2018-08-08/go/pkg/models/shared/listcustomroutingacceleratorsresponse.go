package shared

type ListCustomRoutingAcceleratorsResponse struct {
	Accelerators []CustomRoutingAccelerator `json:"Accelerators"`
	NextToken    *string                    `json:"NextToken"`
}
