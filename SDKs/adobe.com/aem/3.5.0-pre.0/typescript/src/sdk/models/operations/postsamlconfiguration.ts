import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSamlConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$location" })
  dollarLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships" })
  addGroupMemberships?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apply" })
  apply?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL" })
  assertionConsumerServiceUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clockTolerance" })
  clockTolerance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createUser" })
  createUser?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultGroups" })
  defaultGroups?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl" })
  defaultRedirectUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=delete" })
  delete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=digestMethod" })
  digestMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute" })
  groupMembershipAttribute?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=handleLogout" })
  handleLogout?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias" })
  idpCertAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect" })
  idpHttpRedirect?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idpUrl" })
  idpUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword" })
  keyStorePassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=logoutUrl" })
  logoutUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat" })
  nameIdFormat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=post" })
  post?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=propertylist" })
  propertylist?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=service.ranking" })
  serviceRanking?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId" })
  serviceProviderEntityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signatureMethod" })
  signatureMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias" })
  spPrivateKeyAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes" })
  synchronizeAttributes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=useEncryption" })
  useEncryption?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute" })
  userIdAttribute?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath" })
  userIntermediatePath?: string;
}


export class PostSamlConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSamlConfigurationQueryParams;
}


export class PostSamlConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postSamlConfiguration302TextPlainString?: string;

  @Metadata()
  postSamlConfigurationDefaultTextPlainString?: string;
}
