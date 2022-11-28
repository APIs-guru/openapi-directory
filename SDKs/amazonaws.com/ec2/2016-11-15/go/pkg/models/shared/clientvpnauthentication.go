package shared

// ClientVpnAuthentication
// Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.
type ClientVpnAuthentication struct {
	ActiveDirectory         *DirectoryServiceAuthentication
	FederatedAuthentication *FederatedAuthentication
	MutualAuthentication    *CertificateAuthentication
	Type                    *ClientVpnAuthenticationTypeEnum
}
