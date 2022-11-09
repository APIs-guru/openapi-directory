import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostScheduleAccountUpdaterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostScheduleAccountUpdaterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostScheduleAccountUpdaterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostScheduleAccountUpdaterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostScheduleAccountUpdaterSecurityOption2;
}


export class PostScheduleAccountUpdaterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostScheduleAccountUpdaterSecurity;
}


export class PostScheduleAccountUpdaterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleAccountUpdaterResult?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
