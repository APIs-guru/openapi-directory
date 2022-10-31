package operations



type PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams struct {
    AddGroupMemberships *bool `queryParam:"style=form,explode=true,name=addGroupMemberships"`
    AddGroupMembershipsAtTypeHint *string `queryParam:"style=form,explode=true,name=addGroupMemberships@TypeHint"`
    AssertionConsumerServiceURL *string `queryParam:"style=form,explode=true,name=assertionConsumerServiceURL"`
    AssertionConsumerServiceURLAtTypeHint *string `queryParam:"style=form,explode=true,name=assertionConsumerServiceURL@TypeHint"`
    ClockTolerance *int64 `queryParam:"style=form,explode=true,name=clockTolerance"`
    ClockToleranceAtTypeHint *string `queryParam:"style=form,explode=true,name=clockTolerance@TypeHint"`
    CreateUser *bool `queryParam:"style=form,explode=true,name=createUser"`
    CreateUserAtTypeHint *string `queryParam:"style=form,explode=true,name=createUser@TypeHint"`
    DefaultGroups []string `queryParam:"style=form,explode=true,name=defaultGroups"`
    DefaultGroupsAtTypeHint *string `queryParam:"style=form,explode=true,name=defaultGroups@TypeHint"`
    DefaultRedirectURL *string `queryParam:"style=form,explode=true,name=defaultRedirectUrl"`
    DefaultRedirectURLAtTypeHint *string `queryParam:"style=form,explode=true,name=defaultRedirectUrl@TypeHint"`
    DigestMethod *string `queryParam:"style=form,explode=true,name=digestMethod"`
    DigestMethodAtTypeHint *string `queryParam:"style=form,explode=true,name=digestMethod@TypeHint"`
    GroupMembershipAttribute *string `queryParam:"style=form,explode=true,name=groupMembershipAttribute"`
    GroupMembershipAttributeAtTypeHint *string `queryParam:"style=form,explode=true,name=groupMembershipAttribute@TypeHint"`
    HandleLogout *bool `queryParam:"style=form,explode=true,name=handleLogout"`
    HandleLogoutAtTypeHint *string `queryParam:"style=form,explode=true,name=handleLogout@TypeHint"`
    IdpCertAlias *string `queryParam:"style=form,explode=true,name=idpCertAlias"`
    IdpCertAliasAtTypeHint *string `queryParam:"style=form,explode=true,name=idpCertAlias@TypeHint"`
    IdpHTTPRedirect *bool `queryParam:"style=form,explode=true,name=idpHttpRedirect"`
    IdpHTTPRedirectAtTypeHint *string `queryParam:"style=form,explode=true,name=idpHttpRedirect@TypeHint"`
    IdpURL *string `queryParam:"style=form,explode=true,name=idpUrl"`
    IdpURLAtTypeHint *string `queryParam:"style=form,explode=true,name=idpUrl@TypeHint"`
    KeyStorePassword *string `queryParam:"style=form,explode=true,name=keyStorePassword"`
    KeyStorePasswordAtTypeHint *string `queryParam:"style=form,explode=true,name=keyStorePassword@TypeHint"`
    LogoutURL *string `queryParam:"style=form,explode=true,name=logoutUrl"`
    LogoutURLAtTypeHint *string `queryParam:"style=form,explode=true,name=logoutUrl@TypeHint"`
    NameIDFormat *string `queryParam:"style=form,explode=true,name=nameIdFormat"`
    NameIDFormatAtTypeHint *string `queryParam:"style=form,explode=true,name=nameIdFormat@TypeHint"`
    Path []string `queryParam:"style=form,explode=true,name=path"`
    PathAtTypeHint *string `queryParam:"style=form,explode=true,name=path@TypeHint"`
    ServiceRanking *int64 `queryParam:"style=form,explode=true,name=service.ranking"`
    ServiceRankingAtTypeHint *string `queryParam:"style=form,explode=true,name=service.ranking@TypeHint"`
    ServiceProviderEntityID *string `queryParam:"style=form,explode=true,name=serviceProviderEntityId"`
    ServiceProviderEntityIDAtTypeHint *string `queryParam:"style=form,explode=true,name=serviceProviderEntityId@TypeHint"`
    SignatureMethod *string `queryParam:"style=form,explode=true,name=signatureMethod"`
    SignatureMethodAtTypeHint *string `queryParam:"style=form,explode=true,name=signatureMethod@TypeHint"`
    SpPrivateKeyAlias *string `queryParam:"style=form,explode=true,name=spPrivateKeyAlias"`
    SpPrivateKeyAliasAtTypeHint *string `queryParam:"style=form,explode=true,name=spPrivateKeyAlias@TypeHint"`
    SynchronizeAttributes []string `queryParam:"style=form,explode=true,name=synchronizeAttributes"`
    SynchronizeAttributesAtTypeHint *string `queryParam:"style=form,explode=true,name=synchronizeAttributes@TypeHint"`
    UseEncryption *bool `queryParam:"style=form,explode=true,name=useEncryption"`
    UseEncryptionAtTypeHint *string `queryParam:"style=form,explode=true,name=useEncryption@TypeHint"`
    UserIDAttribute *string `queryParam:"style=form,explode=true,name=userIDAttribute"`
    UserIDAttributeAtTypeHint *string `queryParam:"style=form,explode=true,name=userIDAttribute@TypeHint"`
    UserIntermediatePath *string `queryParam:"style=form,explode=true,name=userIntermediatePath"`
    UserIntermediatePathAtTypeHint *string `queryParam:"style=form,explode=true,name=userIntermediatePath@TypeHint"`
    
}

type PostConfigAdobeGraniteSamlAuthenticationHandlerRequest struct {
    QueryParams PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams 
    
}

type PostConfigAdobeGraniteSamlAuthenticationHandlerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

