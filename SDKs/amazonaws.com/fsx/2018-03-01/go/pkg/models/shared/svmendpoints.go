package shared

type SvmEndpoints struct {
	Iscsi      *SvmEndpoint `json:"Iscsi,omitempty"`
	Management *SvmEndpoint `json:"Management,omitempty"`
	Nfs        *SvmEndpoint `json:"Nfs,omitempty"`
	Smb        *SvmEndpoint `json:"Smb,omitempty"`
}
