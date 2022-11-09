import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeLogPattern = "EC2WindowsBarleyService.DescribeLogPattern"
}


export class DescribeLogPatternHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLogPatternXAmzTargetEnum;
}


export class DescribeLogPatternRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLogPatternHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLogPatternRequest;
}


export class DescribeLogPatternResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLogPatternResponse?: shared.DescribeLogPatternResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
