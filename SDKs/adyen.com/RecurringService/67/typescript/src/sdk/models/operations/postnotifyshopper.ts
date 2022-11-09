import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostNotifyShopperSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostNotifyShopperSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostNotifyShopperSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostNotifyShopperSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostNotifyShopperSecurityOption2;
}


export class PostNotifyShopperRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostNotifyShopperSecurity;
}


export class PostNotifyShopperResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notifyShopperResult?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
