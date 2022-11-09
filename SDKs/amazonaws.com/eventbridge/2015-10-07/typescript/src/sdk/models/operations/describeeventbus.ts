import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEventBusXAmzTargetEnum {
    AwsEventsDescribeEventBus = "AWSEvents.DescribeEventBus"
}


export class DescribeEventBusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEventBusXAmzTargetEnum;
}


export class DescribeEventBusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEventBusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEventBusRequest;
}


export class DescribeEventBusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEventBusResponse?: shared.DescribeEventBusResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
