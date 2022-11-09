import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127StopDominantLanguageDetectionJob = "Comprehend_20171127.StopDominantLanguageDetectionJob"
}


export class StopDominantLanguageDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopDominantLanguageDetectionJobXAmzTargetEnum;
}


export class StopDominantLanguageDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopDominantLanguageDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopDominantLanguageDetectionJobRequest;
}


export class StopDominantLanguageDetectionJobResponse extends SpeakeasyBase {
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
  stopDominantLanguageDetectionJobResponse?: shared.StopDominantLanguageDetectionJobResponse;
}
