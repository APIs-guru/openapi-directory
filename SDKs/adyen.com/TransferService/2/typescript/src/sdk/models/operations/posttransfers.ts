import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTransfersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostTransfersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostTransfersSecurity;
}


export class PostTransfersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  restServiceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transfer?: any;
}
