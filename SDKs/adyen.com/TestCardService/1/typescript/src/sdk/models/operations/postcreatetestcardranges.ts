import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCreateTestCardRangesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostCreateTestCardRangesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostCreateTestCardRangesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCreateTestCardRangesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCreateTestCardRangesSecurityOption2;
}


export class PostCreateTestCardRangesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostCreateTestCardRangesSecurity;
}


export class PostCreateTestCardRangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTestCardRangesResult?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
