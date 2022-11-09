import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101CreateReplicationTask = "AmazonDMSv20160101.CreateReplicationTask"
}


export class CreateReplicationTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateReplicationTaskXAmzTargetEnum;
}


export class CreateReplicationTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateReplicationTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateReplicationTaskMessage;
}


export class CreateReplicationTaskResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createReplicationTaskResponse?: shared.CreateReplicationTaskResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  kmsKeyNotAccessibleFault?: any;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;
}
