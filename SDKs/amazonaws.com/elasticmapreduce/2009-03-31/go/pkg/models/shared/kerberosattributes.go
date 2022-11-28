package shared

// KerberosAttributes
// Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.
type KerberosAttributes struct {
	AdDomainJoinPassword             *string `json:"ADDomainJoinPassword,omitempty"`
	AdDomainJoinUser                 *string `json:"ADDomainJoinUser,omitempty"`
	CrossRealmTrustPrincipalPassword *string `json:"CrossRealmTrustPrincipalPassword,omitempty"`
	KdcAdminPassword                 string  `json:"KdcAdminPassword"`
	Realm                            string  `json:"Realm"`
}
