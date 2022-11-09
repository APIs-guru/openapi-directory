import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAppsAppIdQueuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class GetAppsAppIdQueuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdQueuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAppIdQueuesPathParams;

  @Metadata()
  security: GetAppsAppIdQueuesSecurity;
}


export class GetAppsAppIdQueuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.QueueResponse })
  queueResponses?: shared.QueueResponse[];
}
