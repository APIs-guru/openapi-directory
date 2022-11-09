import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy"
}


export class GetLifecyclePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLifecyclePolicyXAmzTargetEnum;
}


export class GetLifecyclePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLifecyclePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetLifecyclePolicyRequest;
}


export class GetLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLifecyclePolicyResponse?: shared.GetLifecyclePolicyResponse;

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
