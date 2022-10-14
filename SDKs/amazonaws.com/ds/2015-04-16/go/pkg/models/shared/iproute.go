package shared

type IPRoute struct {
	CidrIP      *string `json:"CidrIp,omitempty"`
	Description *string `json:"Description,omitempty"`
}
