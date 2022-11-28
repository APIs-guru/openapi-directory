import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTruststoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStoreType" })
  keyStoreType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newPassword" })
  newPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rePassword" })
  rePassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeAlias" })
  removeAlias?: string;
}


export class PostTruststoreRequestBodyCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PostTruststoreRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  certificate?: PostTruststoreRequestBodyCertificate;
}


export class PostTruststoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostTruststoreQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostTruststoreRequestBody;
}


export class PostTruststoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTruststoreDefaultTextPlainString?: string;
}
