import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeDominantLanguageDetectionJob = "Comprehend_20171127.DescribeDominantLanguageDetectionJob"
}


export class DescribeDominantLanguageDetectionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDominantLanguageDetectionJobXAmzTargetEnum;
}


export class DescribeDominantLanguageDetectionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDominantLanguageDetectionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDominantLanguageDetectionJobRequest;
}


export class DescribeDominantLanguageDetectionJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDominantLanguageDetectionJobResponse?: shared.DescribeDominantLanguageDetectionJobResponse;

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
