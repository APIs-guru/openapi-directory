import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListLogSubscriptionsXAmzTargetEnum {
    DirectoryService20150416ListLogSubscriptions = "DirectoryService_20150416.ListLogSubscriptions"
}


export class ListLogSubscriptionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListLogSubscriptionsXAmzTargetEnum;
}


export class ListLogSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListLogSubscriptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListLogSubscriptionsRequest;
}


export class ListLogSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listLogSubscriptionsResult?: shared.ListLogSubscriptionsResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
