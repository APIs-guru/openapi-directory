import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAppsAppIdQueuesQueueIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queue_id" })
  queueId: string;
}


export class DeleteAppsAppIdQueuesQueueIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAppsAppIdQueuesQueueIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAppsAppIdQueuesQueueIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteAppsAppIdQueuesQueueIdSecurity;
}


export class DeleteAppsAppIdQueuesQueueIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
