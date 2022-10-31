package shared



type KerberosAttributes struct {
    AdDomainJoinPassword *string `json:"ADDomainJoinPassword,omitempty"`
    AdDomainJoinUser *string `json:"ADDomainJoinUser,omitempty"`
    CrossRealmTrustPrincipalPassword *string `json:"CrossRealmTrustPrincipalPassword,omitempty"`
    KdcAdminPassword string `json:"KdcAdminPassword"`
    Realm string `json:"Realm"`
    
}

