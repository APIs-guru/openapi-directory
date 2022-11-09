import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SslSetupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=httpsHostname" })
  httpsHostname: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=httpsPort" })
  httpsPort: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keystorePassword" })
  keystorePassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keystorePasswordConfirm" })
  keystorePasswordConfirm: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=truststorePassword" })
  truststorePassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=truststorePasswordConfirm" })
  truststorePasswordConfirm: string;
}


export class SslSetupRequestBodyCertificateFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=certificateFile" })
  certificateFile: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class SslSetupRequestBodyPrivatekeyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=privatekeyFile" })
  privatekeyFile: string;
}


export class SslSetupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  certificateFile?: SslSetupRequestBodyCertificateFile;

  @Metadata({ data: "multipart_form, file=true" })
  privatekeyFile?: SslSetupRequestBodyPrivatekeyFile;
}


export class SslSetupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SslSetupQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: SslSetupRequestBody;
}


export class SslSetupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sslSetupDefaultTextPlainString?: string;
}
