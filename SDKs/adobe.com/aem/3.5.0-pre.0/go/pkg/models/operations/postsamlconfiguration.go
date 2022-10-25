package operations

type PostSamlConfigurationQueryParams struct {
	DollarLocation              *string  `queryParam:"style=form,explode=true,name=$location"`
	Action                      *string  `queryParam:"style=form,explode=true,name=action"`
	AddGroupMemberships         *bool    `queryParam:"style=form,explode=true,name=addGroupMemberships"`
	Apply                       *bool    `queryParam:"style=form,explode=true,name=apply"`
	AssertionConsumerServiceURL *string  `queryParam:"style=form,explode=true,name=assertionConsumerServiceURL"`
	ClockTolerance              *int64   `queryParam:"style=form,explode=true,name=clockTolerance"`
	CreateUser                  *bool    `queryParam:"style=form,explode=true,name=createUser"`
	DefaultGroups               []string `queryParam:"style=form,explode=true,name=defaultGroups"`
	DefaultRedirectURL          *string  `queryParam:"style=form,explode=true,name=defaultRedirectUrl"`
	Delete                      *bool    `queryParam:"style=form,explode=true,name=delete"`
	DigestMethod                *string  `queryParam:"style=form,explode=true,name=digestMethod"`
	GroupMembershipAttribute    *string  `queryParam:"style=form,explode=true,name=groupMembershipAttribute"`
	HandleLogout                *bool    `queryParam:"style=form,explode=true,name=handleLogout"`
	IdpCertAlias                *string  `queryParam:"style=form,explode=true,name=idpCertAlias"`
	IdpHTTPRedirect             *bool    `queryParam:"style=form,explode=true,name=idpHttpRedirect"`
	IdpURL                      *string  `queryParam:"style=form,explode=true,name=idpUrl"`
	KeyStorePassword            *string  `queryParam:"style=form,explode=true,name=keyStorePassword"`
	LogoutURL                   *string  `queryParam:"style=form,explode=true,name=logoutUrl"`
	NameIDFormat                *string  `queryParam:"style=form,explode=true,name=nameIdFormat"`
	Path                        []string `queryParam:"style=form,explode=true,name=path"`
	Post                        *bool    `queryParam:"style=form,explode=true,name=post"`
	Propertylist                []string `queryParam:"style=form,explode=false,name=propertylist"`
	ServiceRanking              *int64   `queryParam:"style=form,explode=true,name=service.ranking"`
	ServiceProviderEntityID     *string  `queryParam:"style=form,explode=true,name=serviceProviderEntityId"`
	SignatureMethod             *string  `queryParam:"style=form,explode=true,name=signatureMethod"`
	SpPrivateKeyAlias           *string  `queryParam:"style=form,explode=true,name=spPrivateKeyAlias"`
	SynchronizeAttributes       []string `queryParam:"style=form,explode=true,name=synchronizeAttributes"`
	UseEncryption               *bool    `queryParam:"style=form,explode=true,name=useEncryption"`
	UserIDAttribute             *string  `queryParam:"style=form,explode=true,name=userIDAttribute"`
	UserIntermediatePath        *string  `queryParam:"style=form,explode=true,name=userIntermediatePath"`
}

type PostSamlConfigurationRequest struct {
	QueryParams PostSamlConfigurationQueryParams
}

type PostSamlConfigurationResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	PostSamlConfiguration302TextPlainString     *string
	PostSamlConfigurationDefaultTextPlainString *string
}
