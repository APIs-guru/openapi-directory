import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartReplicationTaskAssessmentXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTaskAssessment = "AmazonDMSv20160101.StartReplicationTaskAssessment"
}


export class StartReplicationTaskAssessmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartReplicationTaskAssessmentXAmzTargetEnum;
}


export class StartReplicationTaskAssessmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartReplicationTaskAssessmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartReplicationTaskAssessmentMessage;
}


export class StartReplicationTaskAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  startReplicationTaskAssessmentResponse?: shared.StartReplicationTaskAssessmentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
