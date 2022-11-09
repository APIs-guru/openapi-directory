import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGetTaxFormSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGetTaxFormSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGetTaxFormSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGetTaxFormSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGetTaxFormSecurityOption2;
}


export class PostGetTaxFormRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGetTaxFormSecurity;
}


export class PostGetTaxFormResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTaxFormResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
