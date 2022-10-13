package shared

type RevocationConfiguration struct {
	CrlConfiguration  *CrlConfiguration  `json:"CrlConfiguration"`
	OcspConfiguration *OcspConfiguration `json:"OcspConfiguration"`
}
