import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDb20120810DescribeKinesisStreamingDestination = "DynamoDB_20120810.DescribeKinesisStreamingDestination"
}


export class DescribeKinesisStreamingDestinationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeKinesisStreamingDestinationXAmzTargetEnum;
}


export class DescribeKinesisStreamingDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeKinesisStreamingDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeKinesisStreamingDestinationInput;
}


export class DescribeKinesisStreamingDestinationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeKinesisStreamingDestinationOutput?: shared.DescribeKinesisStreamingDestinationOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
