import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEventSourceXAmzTargetEnum {
    AwsEventsDescribeEventSource = "AWSEvents.DescribeEventSource"
}


export class DescribeEventSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEventSourceXAmzTargetEnum;
}


export class DescribeEventSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEventSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEventSourceRequest;
}


export class DescribeEventSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEventSourceResponse?: shared.DescribeEventSourceResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
