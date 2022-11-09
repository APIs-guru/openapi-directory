import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartReplicationTaskAssessmentXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTaskAssessment = "AmazonDMSv20160101.StartReplicationTaskAssessment"
}


export class StartReplicationTaskAssessmentHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartReplicationTaskAssessmentXAmzTargetEnum;
}


export class StartReplicationTaskAssessmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartReplicationTaskAssessmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartReplicationTaskAssessmentMessage;
}


export class StartReplicationTaskAssessmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  startReplicationTaskAssessmentResponse?: shared.StartReplicationTaskAssessmentResponse;

  @Metadata()
  statusCode: number;
}
