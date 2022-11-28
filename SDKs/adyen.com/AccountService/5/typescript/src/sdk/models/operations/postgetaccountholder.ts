import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGetAccountHolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostGetAccountHolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: PostGetAccountHolderSecurity;
}


export class PostGetAccountHolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccountHolderResponse?: any;

  @SpeakeasyMetadata()
  serviceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
