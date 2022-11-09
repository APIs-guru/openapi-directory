import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostListRecurringDetailsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostListRecurringDetailsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostListRecurringDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostListRecurringDetailsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostListRecurringDetailsSecurityOption2;
}


export class PostListRecurringDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostListRecurringDetailsSecurity;
}


export class PostListRecurringDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  recurringDetailsResult?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
