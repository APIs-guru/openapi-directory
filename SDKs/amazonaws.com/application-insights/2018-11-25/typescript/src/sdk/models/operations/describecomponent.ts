import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponent = "EC2WindowsBarleyService.DescribeComponent"
}


export class DescribeComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeComponentXAmzTargetEnum;
}


export class DescribeComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeComponentRequest;
}


export class DescribeComponentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeComponentResponse?: shared.DescribeComponentResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
