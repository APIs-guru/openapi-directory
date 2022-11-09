import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships" })
  addGroupMemberships?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships@TypeHint" })
  addGroupMembershipsAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL" })
  assertionConsumerServiceUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL@TypeHint" })
  assertionConsumerServiceUrlAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clockTolerance" })
  clockTolerance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clockTolerance@TypeHint" })
  clockToleranceAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createUser" })
  createUser?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createUser@TypeHint" })
  createUserAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultGroups" })
  defaultGroups?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultGroups@TypeHint" })
  defaultGroupsAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl" })
  defaultRedirectUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl@TypeHint" })
  defaultRedirectUrlAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=digestMethod" })
  digestMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=digestMethod@TypeHint" })
  digestMethodAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute" })
  groupMembershipAttribute?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute@TypeHint" })
  groupMembershipAttributeAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=handleLogout" })
  handleLogout?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=handleLogout@TypeHint" })
  handleLogoutAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias" })
  idpCertAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias@TypeHint" })
  idpCertAliasAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect" })
  idpHttpRedirect?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect@TypeHint" })
  idpHttpRedirectAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpUrl" })
  idpUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpUrl@TypeHint" })
  idpUrlAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword" })
  keyStorePassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword@TypeHint" })
  keyStorePasswordAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=logoutUrl" })
  logoutUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=logoutUrl@TypeHint" })
  logoutUrlAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat" })
  nameIdFormat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat@TypeHint" })
  nameIdFormatAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=path@TypeHint" })
  pathAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service.ranking" })
  serviceRanking?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service.ranking@TypeHint" })
  serviceRankingAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId" })
  serviceProviderEntityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId@TypeHint" })
  serviceProviderEntityIdAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signatureMethod" })
  signatureMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signatureMethod@TypeHint" })
  signatureMethodAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias" })
  spPrivateKeyAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias@TypeHint" })
  spPrivateKeyAliasAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes" })
  synchronizeAttributes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes@TypeHint" })
  synchronizeAttributesAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useEncryption" })
  useEncryption?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useEncryption@TypeHint" })
  useEncryptionAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute" })
  userIdAttribute?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute@TypeHint" })
  userIdAttributeAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath" })
  userIntermediatePath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath@TypeHint" })
  userIntermediatePathAtTypeHint?: string;
}


export class PostConfigAdobeGraniteSamlAuthenticationHandlerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams;
}


export class PostConfigAdobeGraniteSamlAuthenticationHandlerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
