package shared



type RegistryCredential struct {
    Credential string `json:"credential"`
    CredentialProvider CredentialProviderTypeEnum `json:"credentialProvider"`
    
}

