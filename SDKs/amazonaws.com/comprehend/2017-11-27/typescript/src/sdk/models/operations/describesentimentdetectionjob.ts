import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeSentimentDetectionJob = "Comprehend_20171127.DescribeSentimentDetectionJob"
}


export class DescribeSentimentDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSentimentDetectionJobXAmzTargetEnum;
}


export class DescribeSentimentDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSentimentDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSentimentDetectionJobRequest;
}


export class DescribeSentimentDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSentimentDetectionJobResponse?: shared.DescribeSentimentDetectionJobResponse;

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
