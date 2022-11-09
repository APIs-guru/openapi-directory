import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGetPciQuestionnaireUrlSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGetPciQuestionnaireUrlSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGetPciQuestionnaireUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGetPciQuestionnaireUrlSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGetPciQuestionnaireUrlSecurityOption2;
}


export class PostGetPciQuestionnaireUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGetPciQuestionnaireUrlSecurity;
}


export class PostGetPciQuestionnaireUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPciUrlResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
