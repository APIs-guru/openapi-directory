import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthorizableKeystorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" })
  authorizableId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" })
  intermediatePath: string;
}


export class PostAuthorizableKeystoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPassword" })
  currentPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyPassword" })
  keyPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStorePass" })
  keyStorePass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newAlias" })
  newAlias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newPassword" })
  newPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rePassword" })
  rePassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeAlias" })
  removeAlias?: string;
}


export class PostAuthorizableKeystoreRequestBodyCertChain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=cert-chain" })
  certChain: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PostAuthorizableKeystoreRequestBodyKeyStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=keyStore" })
  keyStore: string;
}


export class PostAuthorizableKeystoreRequestBodyPk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=pk" })
  pk: string;
}


export class PostAuthorizableKeystoreRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  certChain?: PostAuthorizableKeystoreRequestBodyCertChain;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  keyStore?: PostAuthorizableKeystoreRequestBodyKeyStore;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  pk?: PostAuthorizableKeystoreRequestBodyPk;
}


export class PostAuthorizableKeystoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAuthorizableKeystorePathParams;

  @SpeakeasyMetadata()
  queryParams: PostAuthorizableKeystoreQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostAuthorizableKeystoreRequestBody;
}


export class PostAuthorizableKeystoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthorizableKeystoreDefaultTextPlainString?: string;
}
