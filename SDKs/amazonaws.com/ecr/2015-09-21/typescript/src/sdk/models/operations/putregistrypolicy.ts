import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy"
}


export class PutRegistryPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRegistryPolicyXAmzTargetEnum;
}


export class PutRegistryPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRegistryPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRegistryPolicyRequest;
}


export class PutRegistryPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putRegistryPolicyResponse?: shared.PutRegistryPolicyResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
