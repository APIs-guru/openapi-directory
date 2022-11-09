import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdateAccountHolderStateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostUpdateAccountHolderStateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostUpdateAccountHolderStateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUpdateAccountHolderStateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUpdateAccountHolderStateSecurityOption2;
}


export class PostUpdateAccountHolderStateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostUpdateAccountHolderStateSecurity;
}


export class PostUpdateAccountHolderStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAccountHolderStatusResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
