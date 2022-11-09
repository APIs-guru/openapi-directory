import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101CancelReplicationTaskAssessmentRun = "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun"
}


export class CancelReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelReplicationTaskAssessmentRunXAmzTargetEnum;
}


export class CancelReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelReplicationTaskAssessmentRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelReplicationTaskAssessmentRunMessage;
}


export class CancelReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  cancelReplicationTaskAssessmentRunResponse?: shared.CancelReplicationTaskAssessmentRunResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
