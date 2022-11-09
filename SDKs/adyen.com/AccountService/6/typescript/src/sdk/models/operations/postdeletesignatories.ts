import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDeleteSignatoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDeleteSignatoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDeleteSignatoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDeleteSignatoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDeleteSignatoriesSecurityOption2;
}


export class PostDeleteSignatoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDeleteSignatoriesSecurity;
}


export class PostDeleteSignatoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
