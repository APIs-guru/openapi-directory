package shared

// SvmEndpoints
// An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.
type SvmEndpoints struct {
	Iscsi      *SvmEndpoint `json:"Iscsi,omitempty"`
	Management *SvmEndpoint `json:"Management,omitempty"`
	Nfs        *SvmEndpoint `json:"Nfs,omitempty"`
	Smb        *SvmEndpoint `json:"Smb,omitempty"`
}
