import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteRepositoryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteRepositoryPolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy"
}


export class DeleteRepositoryPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteRepositoryPolicyXAmzTargetEnum;
}


export class DeleteRepositoryPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteRepositoryPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteRepositoryPolicyRequest;
}


export class DeleteRepositoryPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteRepositoryPolicyResponse?: shared.DeleteRepositoryPolicyResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  repositoryPolicyNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
