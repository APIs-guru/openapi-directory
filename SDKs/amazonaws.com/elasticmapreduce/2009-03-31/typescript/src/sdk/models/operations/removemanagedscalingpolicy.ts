import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveManagedScalingPolicy = "ElasticMapReduce.RemoveManagedScalingPolicy"
}


export class RemoveManagedScalingPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveManagedScalingPolicyXAmzTargetEnum;
}


export class RemoveManagedScalingPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveManagedScalingPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveManagedScalingPolicyInput;
}


export class RemoveManagedScalingPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  removeManagedScalingPolicyOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
