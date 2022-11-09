import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030DescribeEntitiesDetectionV2Job = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job"
}


export class DescribeEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEntitiesDetectionV2JobXAmzTargetEnum;
}


export class DescribeEntitiesDetectionV2JobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEntitiesDetectionV2JobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEntitiesDetectionV2JobRequest;
}


export class DescribeEntitiesDetectionV2JobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEntitiesDetectionV2JobResponse?: shared.DescribeEntitiesDetectionV2JobResponse;

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
