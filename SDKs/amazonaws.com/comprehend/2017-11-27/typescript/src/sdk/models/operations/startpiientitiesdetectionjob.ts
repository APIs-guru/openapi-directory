import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartPiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartPiiEntitiesDetectionJob = "Comprehend_20171127.StartPiiEntitiesDetectionJob"
}


export class StartPiiEntitiesDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartPiiEntitiesDetectionJobXAmzTargetEnum;
}


export class StartPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartPiiEntitiesDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartPiiEntitiesDetectionJobRequest;
}


export class StartPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  kmsKeyValidationException?: any;

  @Metadata()
  startPiiEntitiesDetectionJobResponse?: shared.StartPiiEntitiesDetectionJobResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
