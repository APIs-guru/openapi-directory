import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStudioXAmzTargetEnum {
    ElasticMapReduceDescribeStudio = "ElasticMapReduce.DescribeStudio"
}


export class DescribeStudioHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStudioXAmzTargetEnum;
}


export class DescribeStudioRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStudioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStudioInput;
}


export class DescribeStudioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStudioOutput?: shared.DescribeStudioOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
