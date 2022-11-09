import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDeliveryStreamXAmzTargetEnum {
    Firehose20150804DescribeDeliveryStream = "Firehose_20150804.DescribeDeliveryStream"
}


export class DescribeDeliveryStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDeliveryStreamXAmzTargetEnum;
}


export class DescribeDeliveryStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDeliveryStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDeliveryStreamInput;
}


export class DescribeDeliveryStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDeliveryStreamOutput?: shared.DescribeDeliveryStreamOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
