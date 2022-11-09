import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDeletePayoutMethodsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDeletePayoutMethodsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDeletePayoutMethodsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDeletePayoutMethodsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDeletePayoutMethodsSecurityOption2;
}


export class PostDeletePayoutMethodsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDeletePayoutMethodsSecurity;
}


export class PostDeletePayoutMethodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
