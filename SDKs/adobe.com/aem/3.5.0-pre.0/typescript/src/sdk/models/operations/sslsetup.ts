import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SslSetupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=httpsHostname" })
  httpsHostname: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=httpsPort" })
  httpsPort: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keystorePassword" })
  keystorePassword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keystorePasswordConfirm" })
  keystorePasswordConfirm: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=truststorePassword" })
  truststorePassword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=truststorePasswordConfirm" })
  truststorePasswordConfirm: string;
}


export class SslSetupRequestBodyCertificateFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=certificateFile" })
  certificateFile: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class SslSetupRequestBodyPrivatekeyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=privatekeyFile" })
  privatekeyFile: string;
}


export class SslSetupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  certificateFile?: SslSetupRequestBodyCertificateFile;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  privatekeyFile?: SslSetupRequestBodyPrivatekeyFile;
}


export class SslSetupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SslSetupQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: SslSetupRequestBody;
}


export class SslSetupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sslSetupDefaultTextPlainString?: string;
}
