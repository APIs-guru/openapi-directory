import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeIcd10CmInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030DescribeIcd10CmInferenceJob = "ComprehendMedical_20181030.DescribeICD10CMInferenceJob"
}


export class DescribeIcd10CmInferenceJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeIcd10CmInferenceJobXAmzTargetEnum;
}


export class DescribeIcd10CmInferenceJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeIcd10CmInferenceJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeIcd10CmInferenceJobRequest;
}


export class DescribeIcd10CmInferenceJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeIcd10CmInferenceJobResponse?: shared.DescribeIcd10CmInferenceJobResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
