import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RemoveAutoScalingPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveAutoScalingPolicy = "ElasticMapReduce.RemoveAutoScalingPolicy"
}


export class RemoveAutoScalingPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveAutoScalingPolicyXAmzTargetEnum;
}


export class RemoveAutoScalingPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RemoveAutoScalingPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RemoveAutoScalingPolicyInput;
}


export class RemoveAutoScalingPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  removeAutoScalingPolicyOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
