import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127StartEventsDetectionJob = "Comprehend_20171127.StartEventsDetectionJob"
}


export class StartEventsDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartEventsDetectionJobXAmzTargetEnum;
}


export class StartEventsDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartEventsDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartEventsDetectionJobRequest;
}


export class StartEventsDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  kmsKeyValidationException?: any;

  @Metadata()
  startEventsDetectionJobResponse?: shared.StartEventsDetectionJobResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
