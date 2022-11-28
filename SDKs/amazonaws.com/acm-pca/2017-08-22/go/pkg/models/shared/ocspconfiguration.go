package shared

// OcspConfiguration
// <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>
type OcspConfiguration struct {
	Enabled         bool    `json:"Enabled"`
	OcspCustomCname *string `json:"OcspCustomCname,omitempty"`
}
