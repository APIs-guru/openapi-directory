import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGetOnboardingUrlSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGetOnboardingUrlSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGetOnboardingUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGetOnboardingUrlSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGetOnboardingUrlSecurityOption2;
}


export class PostGetOnboardingUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGetOnboardingUrlSecurity;
}


export class PostGetOnboardingUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOnboardingUrlResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
