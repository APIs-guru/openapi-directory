import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribePiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribePiiEntitiesDetectionJob = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"
}


export class DescribePiiEntitiesDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePiiEntitiesDetectionJobXAmzTargetEnum;
}


export class DescribePiiEntitiesDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribePiiEntitiesDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePiiEntitiesDetectionJobRequest;
}


export class DescribePiiEntitiesDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePiiEntitiesDetectionJobResponse?: shared.DescribePiiEntitiesDetectionJobResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
