import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSamlConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$location" })
  dollarLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addGroupMemberships" })
  addGroupMemberships?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apply" })
  apply?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assertionConsumerServiceURL" })
  assertionConsumerServiceUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clockTolerance" })
  clockTolerance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createUser" })
  createUser?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultGroups" })
  defaultGroups?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultRedirectUrl" })
  defaultRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=digestMethod" })
  digestMethod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMembershipAttribute" })
  groupMembershipAttribute?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handleLogout" })
  handleLogout?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpCertAlias" })
  idpCertAlias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpHttpRedirect" })
  idpHttpRedirect?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idpUrl" })
  idpUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStorePassword" })
  keyStorePassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=logoutUrl" })
  logoutUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameIdFormat" })
  nameIdFormat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=post" })
  post?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=propertylist" })
  propertylist?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service.ranking" })
  serviceRanking?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceProviderEntityId" })
  serviceProviderEntityId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureMethod" })
  signatureMethod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spPrivateKeyAlias" })
  spPrivateKeyAlias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synchronizeAttributes" })
  synchronizeAttributes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useEncryption" })
  useEncryption?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIDAttribute" })
  userIdAttribute?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIntermediatePath" })
  userIntermediatePath?: string;
}


export class PostSamlConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSamlConfigurationQueryParams;
}


export class PostSamlConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postSamlConfiguration302TextPlainString?: string;

  @SpeakeasyMetadata()
  postSamlConfigurationDefaultTextPlainString?: string;
}
