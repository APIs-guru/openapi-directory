import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGetCostEstimateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGetCostEstimateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGetCostEstimateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGetCostEstimateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGetCostEstimateSecurityOption2;
}


export class PostGetCostEstimateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGetCostEstimateSecurity;
}


export class PostGetCostEstimateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  costEstimateResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
