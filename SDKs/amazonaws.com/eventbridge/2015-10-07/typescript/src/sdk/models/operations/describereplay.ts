import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeReplayXAmzTargetEnum {
    AwsEventsDescribeReplay = "AWSEvents.DescribeReplay"
}


export class DescribeReplayHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeReplayXAmzTargetEnum;
}


export class DescribeReplayRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeReplayHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReplayRequest;
}


export class DescribeReplayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReplayResponse?: shared.DescribeReplayResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
