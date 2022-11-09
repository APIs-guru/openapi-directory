import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAppsAppIdQueuesQueueIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=queue_id" })
  queueId: string;
}


export class DeleteAppsAppIdQueuesQueueIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAppsAppIdQueuesQueueIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAppsAppIdQueuesQueueIdPathParams;

  @Metadata()
  security: DeleteAppsAppIdQueuesQueueIdSecurity;
}


export class DeleteAppsAppIdQueuesQueueIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
