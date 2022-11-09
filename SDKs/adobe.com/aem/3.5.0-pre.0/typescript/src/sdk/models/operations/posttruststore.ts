import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTruststoreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyStoreType" })
  keyStoreType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newPassword" })
  newPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rePassword" })
  rePassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=removeAlias" })
  removeAlias?: string;
}


export class PostTruststoreRequestBodyCertificate extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=certificate" })
  certificate: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PostTruststoreRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  certificate?: PostTruststoreRequestBodyCertificate;
}


export class PostTruststoreRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostTruststoreQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostTruststoreRequestBody;
}


export class PostTruststoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postTruststoreDefaultTextPlainString?: string;
}
