import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101DeleteReplicationTaskAssessmentRun = "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun"
}


export class DeleteReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteReplicationTaskAssessmentRunXAmzTargetEnum;
}


export class DeleteReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteReplicationTaskAssessmentRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteReplicationTaskAssessmentRunMessage;
}


export class DeleteReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteReplicationTaskAssessmentRunResponse?: shared.DeleteReplicationTaskAssessmentRunResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
