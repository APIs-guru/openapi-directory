import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeKeyPhrasesDetectionJob = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
}


export class DescribeKeyPhrasesDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeKeyPhrasesDetectionJobXAmzTargetEnum;
}


export class DescribeKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeKeyPhrasesDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeKeyPhrasesDetectionJobRequest;
}


export class DescribeKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeKeyPhrasesDetectionJobResponse?: shared.DescribeKeyPhrasesDetectionJobResponse;

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
