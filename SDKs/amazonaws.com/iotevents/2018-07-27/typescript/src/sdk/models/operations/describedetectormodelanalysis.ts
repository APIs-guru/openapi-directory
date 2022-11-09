import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeDetectorModelAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=analysisId" })
  analysisId: string;
}


export class DescribeDetectorModelAnalysisHeaders extends SpeakeasyBase {
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
}


export class DescribeDetectorModelAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeDetectorModelAnalysisPathParams;

  @Metadata()
  headers: DescribeDetectorModelAnalysisHeaders;
}


export class DescribeDetectorModelAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDetectorModelAnalysisResponse?: shared.DescribeDetectorModelAnalysisResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
