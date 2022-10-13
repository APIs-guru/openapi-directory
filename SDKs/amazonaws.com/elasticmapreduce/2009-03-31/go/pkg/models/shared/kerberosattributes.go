package shared

type KerberosAttributes struct {
	AdDomainJoinPassword             *string `json:"ADDomainJoinPassword"`
	AdDomainJoinUser                 *string `json:"ADDomainJoinUser"`
	CrossRealmTrustPrincipalPassword *string `json:"CrossRealmTrustPrincipalPassword"`
	KdcAdminPassword                 string  `json:"KdcAdminPassword"`
	Realm                            string  `json:"Realm"`
}
