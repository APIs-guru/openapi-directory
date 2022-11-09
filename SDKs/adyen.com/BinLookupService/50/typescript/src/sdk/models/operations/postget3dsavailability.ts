import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGet3dsAvailabilitySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGet3dsAvailabilitySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGet3dsAvailabilitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGet3dsAvailabilitySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGet3dsAvailabilitySecurityOption2;
}


export class PostGet3dsAvailabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGet3dsAvailabilitySecurity;
}


export class PostGet3dsAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  threeDsAvailabilityResponse?: any;
}
