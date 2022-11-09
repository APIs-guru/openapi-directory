import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101DeleteReplicationTask = "AmazonDMSv20160101.DeleteReplicationTask"
}


export class DeleteReplicationTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteReplicationTaskXAmzTargetEnum;
}


export class DeleteReplicationTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteReplicationTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteReplicationTaskMessage;
}


export class DeleteReplicationTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteReplicationTaskResponse?: shared.DeleteReplicationTaskResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
