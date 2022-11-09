import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAuthorizableKeystorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" })
  authorizableId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" })
  intermediatePath: string;
}


export class PostAuthorizableKeystoreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alias" })
  alias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPassword" })
  currentPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyPassword" })
  keyPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyStorePass" })
  keyStorePass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newAlias" })
  newAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newPassword" })
  newPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rePassword" })
  rePassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=removeAlias" })
  removeAlias?: string;
}


export class PostAuthorizableKeystoreRequestBodyCertChain extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=cert-chain" })
  certChain: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PostAuthorizableKeystoreRequestBodyKeyStore extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=keyStore" })
  keyStore: string;
}


export class PostAuthorizableKeystoreRequestBodyPk extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=pk" })
  pk: string;
}


export class PostAuthorizableKeystoreRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  certChain?: PostAuthorizableKeystoreRequestBodyCertChain;

  @Metadata({ data: "multipart_form, file=true" })
  keyStore?: PostAuthorizableKeystoreRequestBodyKeyStore;

  @Metadata({ data: "multipart_form, file=true" })
  pk?: PostAuthorizableKeystoreRequestBodyPk;
}


export class PostAuthorizableKeystoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAuthorizableKeystorePathParams;

  @Metadata()
  queryParams: PostAuthorizableKeystoreQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostAuthorizableKeystoreRequestBody;
}


export class PostAuthorizableKeystoreResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postAuthorizableKeystoreDefaultTextPlainString?: string;
}
