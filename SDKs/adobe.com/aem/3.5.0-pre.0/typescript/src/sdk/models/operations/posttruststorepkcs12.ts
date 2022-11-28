import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTruststorePkcs12RequestBodyTruststoreP12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=truststore.p12" })
  truststoreP12: string;
}


export class PostTruststorePkcs12RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  truststoreP12?: PostTruststorePkcs12RequestBodyTruststoreP12;
}


export class PostTruststorePkcs12Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostTruststorePkcs12RequestBody;
}


export class PostTruststorePkcs12Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTruststorePkcs12DefaultTextPlainString?: string;
}
