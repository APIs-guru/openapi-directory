import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTruststorePkcs12RequestBodyTruststoreP12 extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=truststore.p12" })
  truststoreP12: string;
}


export class PostTruststorePkcs12RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  truststoreP12?: PostTruststorePkcs12RequestBodyTruststoreP12;
}


export class PostTruststorePkcs12Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostTruststorePkcs12RequestBody;
}


export class PostTruststorePkcs12Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postTruststorePkcs12DefaultTextPlainString?: string;
}
