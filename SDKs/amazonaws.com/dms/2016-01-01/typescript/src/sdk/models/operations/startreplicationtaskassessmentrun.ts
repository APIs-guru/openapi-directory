import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTaskAssessmentRun = "AmazonDMSv20160101.StartReplicationTaskAssessmentRun"
}


export class StartReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartReplicationTaskAssessmentRunXAmzTargetEnum;
}


export class StartReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartReplicationTaskAssessmentRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartReplicationTaskAssessmentRunMessage;
}


export class StartReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  kmsAccessDeniedFault?: any;

  @Metadata()
  kmsDisabledFault?: any;

  @Metadata()
  kmsFault?: any;

  @Metadata()
  kmsInvalidStateFault?: any;

  @Metadata()
  kmsKeyNotAccessibleFault?: any;

  @Metadata()
  kmsNotFoundFault?: any;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  s3AccessDeniedFault?: any;

  @Metadata()
  s3ResourceNotFoundFault?: any;

  @Metadata()
  startReplicationTaskAssessmentRunResponse?: shared.StartReplicationTaskAssessmentRunResponse;

  @Metadata()
  statusCode: number;
}
