import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAppsAppIdQueuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class PostAppsAppIdQueuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdQueuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdQueuesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Queue;

  @Metadata()
  security: PostAppsAppIdQueuesSecurity;
}


export class PostAppsAppIdQueuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  queueResponse?: shared.QueueResponse;
}
