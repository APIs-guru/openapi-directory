import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTaskAssessmentRun = "AmazonDMSv20160101.StartReplicationTaskAssessmentRun"
}


export class StartReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartReplicationTaskAssessmentRunXAmzTargetEnum;
}


export class StartReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartReplicationTaskAssessmentRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartReplicationTaskAssessmentRunMessage;
}


export class StartReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  kmsAccessDeniedFault?: any;

  @SpeakeasyMetadata()
  kmsDisabledFault?: any;

  @SpeakeasyMetadata()
  kmsFault?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateFault?: any;

  @SpeakeasyMetadata()
  kmsKeyNotAccessibleFault?: any;

  @SpeakeasyMetadata()
  kmsNotFoundFault?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  s3AccessDeniedFault?: any;

  @SpeakeasyMetadata()
  s3ResourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  startReplicationTaskAssessmentRunResponse?: shared.StartReplicationTaskAssessmentRunResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
