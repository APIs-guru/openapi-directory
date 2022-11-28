import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartPiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartPiiEntitiesDetectionJob = "Comprehend_20171127.StartPiiEntitiesDetectionJob"
}


export class StartPiiEntitiesDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartPiiEntitiesDetectionJobXAmzTargetEnum;
}


export class StartPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartPiiEntitiesDetectionJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartPiiEntitiesDetectionJobRequest;
}


export class StartPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  kmsKeyValidationException?: any;

  @SpeakeasyMetadata()
  startPiiEntitiesDetectionJobResponse?: shared.StartPiiEntitiesDetectionJobResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  tooManyTagsException?: any;
}
