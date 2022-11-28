import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeJobFlowsXAmzTargetEnum {
    ElasticMapReduceDescribeJobFlows = "ElasticMapReduce.DescribeJobFlows"
}


export class DescribeJobFlowsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeJobFlowsXAmzTargetEnum;
}


export class DescribeJobFlowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeJobFlowsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeJobFlowsInput;
}


export class DescribeJobFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeJobFlowsOutput?: shared.DescribeJobFlowsOutput;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
