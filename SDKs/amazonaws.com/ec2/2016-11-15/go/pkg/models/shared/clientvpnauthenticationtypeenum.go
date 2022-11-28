package shared

type ClientVpnAuthenticationTypeEnum string

const (
	ClientVpnAuthenticationTypeEnumCertificateAuthentication      ClientVpnAuthenticationTypeEnum = "certificate-authentication"
	ClientVpnAuthenticationTypeEnumDirectoryServiceAuthentication ClientVpnAuthenticationTypeEnum = "directory-service-authentication"
	ClientVpnAuthenticationTypeEnumFederatedAuthentication        ClientVpnAuthenticationTypeEnum = "federated-authentication"
)
