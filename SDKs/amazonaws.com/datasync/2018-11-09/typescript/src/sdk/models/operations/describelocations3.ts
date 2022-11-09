import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLocationS3XAmzTargetEnum {
    FmrsServiceDescribeLocationS3 = "FmrsService.DescribeLocationS3"
}


export class DescribeLocationS3Headers extends SpeakeasyBase {
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
  xAmzTarget: DescribeLocationS3XAmzTargetEnum;
}


export class DescribeLocationS3Request extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLocationS3Headers;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLocationS3Request;
}


export class DescribeLocationS3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLocationS3Response?: shared.DescribeLocationS3Response;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
