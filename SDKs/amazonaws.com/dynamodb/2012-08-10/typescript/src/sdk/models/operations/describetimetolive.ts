import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTimeToLiveXAmzTargetEnum {
    DynamoDb20120810DescribeTimeToLive = "DynamoDB_20120810.DescribeTimeToLive"
}


export class DescribeTimeToLiveHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTimeToLiveXAmzTargetEnum;
}


export class DescribeTimeToLiveRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTimeToLiveHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTimeToLiveInput;
}


export class DescribeTimeToLiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTimeToLiveOutput?: shared.DescribeTimeToLiveOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
