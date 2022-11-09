import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopEntitiesDetectionJob = "Comprehend_20171127.StopEntitiesDetectionJob"
}


export class StopEntitiesDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopEntitiesDetectionJobXAmzTargetEnum;
}


export class StopEntitiesDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopEntitiesDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopEntitiesDetectionJobRequest;
}


export class StopEntitiesDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopEntitiesDetectionJobResponse?: shared.StopEntitiesDetectionJobResponse;
}
