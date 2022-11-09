import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy"
}


export class DeleteLifecyclePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteLifecyclePolicyXAmzTargetEnum;
}


export class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteLifecyclePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteLifecyclePolicyRequest;
}


export class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteLifecyclePolicyResponse?: shared.DeleteLifecyclePolicyResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  lifecyclePolicyNotFoundException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
