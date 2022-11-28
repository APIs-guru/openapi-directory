package shared

type SamlConfigurationProperties struct {
	AddGroupMemberships         *SamlConfigurationPropertyItemsBoolean
	AssertionConsumerServiceURL *SamlConfigurationPropertyItemsString
	ClockTolerance              *SamlConfigurationPropertyItemsLong
	CreateUser                  *SamlConfigurationPropertyItemsBoolean
	DefaultGroups               *SamlConfigurationPropertyItemsArray
	DefaultRedirectURL          *SamlConfigurationPropertyItemsString
	DigestMethod                *SamlConfigurationPropertyItemsString
	GroupMembershipAttribute    *SamlConfigurationPropertyItemsString
	HandleLogout                *SamlConfigurationPropertyItemsBoolean
	IdpCertAlias                *SamlConfigurationPropertyItemsString
	IdpHTTPRedirect             *SamlConfigurationPropertyItemsBoolean
	IdpURL                      *SamlConfigurationPropertyItemsString
	KeyStorePassword            *SamlConfigurationPropertyItemsString
	LogoutURL                   *SamlConfigurationPropertyItemsString
	NameIDFormat                *SamlConfigurationPropertyItemsString
	Path                        *SamlConfigurationPropertyItemsArray
	ServiceRanking              *SamlConfigurationPropertyItemsLong
	ServiceProviderEntityID     *SamlConfigurationPropertyItemsString
	SignatureMethod             *SamlConfigurationPropertyItemsString
	SpPrivateKeyAlias           *SamlConfigurationPropertyItemsString
	SynchronizeAttributes       *SamlConfigurationPropertyItemsArray
	UseEncryption               *SamlConfigurationPropertyItemsBoolean
	UserIDAttribute             *SamlConfigurationPropertyItemsString
	UserIntermediatePath        *SamlConfigurationPropertyItemsString
}
