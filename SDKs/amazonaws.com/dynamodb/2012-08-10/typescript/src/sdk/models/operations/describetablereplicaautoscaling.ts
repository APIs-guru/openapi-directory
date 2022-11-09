import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTableReplicaAutoScalingXAmzTargetEnum {
    DynamoDb20120810DescribeTableReplicaAutoScaling = "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
}


export class DescribeTableReplicaAutoScalingHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTableReplicaAutoScalingXAmzTargetEnum;
}


export class DescribeTableReplicaAutoScalingRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTableReplicaAutoScalingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTableReplicaAutoScalingInput;
}


export class DescribeTableReplicaAutoScalingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTableReplicaAutoScalingOutput?: shared.DescribeTableReplicaAutoScalingOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
