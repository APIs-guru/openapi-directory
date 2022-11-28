import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams extends SpeakeasyBase {
    addGroupMemberships?: boolean;
    addGroupMembershipsAtTypeHint?: string;
    assertionConsumerServiceUrl?: string;
    assertionConsumerServiceUrlAtTypeHint?: string;
    clockTolerance?: number;
    clockToleranceAtTypeHint?: string;
    createUser?: boolean;
    createUserAtTypeHint?: string;
    defaultGroups?: string[];
    defaultGroupsAtTypeHint?: string;
    defaultRedirectUrl?: string;
    defaultRedirectUrlAtTypeHint?: string;
    digestMethod?: string;
    digestMethodAtTypeHint?: string;
    groupMembershipAttribute?: string;
    groupMembershipAttributeAtTypeHint?: string;
    handleLogout?: boolean;
    handleLogoutAtTypeHint?: string;
    idpCertAlias?: string;
    idpCertAliasAtTypeHint?: string;
    idpHttpRedirect?: boolean;
    idpHttpRedirectAtTypeHint?: string;
    idpUrl?: string;
    idpUrlAtTypeHint?: string;
    keyStorePassword?: string;
    keyStorePasswordAtTypeHint?: string;
    logoutUrl?: string;
    logoutUrlAtTypeHint?: string;
    nameIdFormat?: string;
    nameIdFormatAtTypeHint?: string;
    path?: string[];
    pathAtTypeHint?: string;
    serviceRanking?: number;
    serviceRankingAtTypeHint?: string;
    serviceProviderEntityId?: string;
    serviceProviderEntityIdAtTypeHint?: string;
    signatureMethod?: string;
    signatureMethodAtTypeHint?: string;
    spPrivateKeyAlias?: string;
    spPrivateKeyAliasAtTypeHint?: string;
    synchronizeAttributes?: string[];
    synchronizeAttributesAtTypeHint?: string;
    useEncryption?: boolean;
    useEncryptionAtTypeHint?: string;
    userIdAttribute?: string;
    userIdAttributeAtTypeHint?: string;
    userIntermediatePath?: string;
    userIntermediatePathAtTypeHint?: string;
}
export declare class PostConfigAdobeGraniteSamlAuthenticationHandlerRequest extends SpeakeasyBase {
    queryParams: PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams;
}
export declare class PostConfigAdobeGraniteSamlAuthenticationHandlerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
