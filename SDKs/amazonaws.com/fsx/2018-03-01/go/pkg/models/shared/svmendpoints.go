package shared

type SvmEndpoints struct {
	Iscsi      *SvmEndpoint `json:"Iscsi"`
	Management *SvmEndpoint `json:"Management"`
	Nfs        *SvmEndpoint `json:"Nfs"`
	Smb        *SvmEndpoint `json:"Smb"`
}
