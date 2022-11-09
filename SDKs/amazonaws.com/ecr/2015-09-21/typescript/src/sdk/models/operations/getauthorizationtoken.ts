import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAuthorizationTokenXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetAuthorizationToken = "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken"
}


export class GetAuthorizationTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAuthorizationTokenXAmzTargetEnum;
}


export class GetAuthorizationTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAuthorizationTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAuthorizationTokenRequest;
}


export class GetAuthorizationTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAuthorizationTokenResponse?: shared.GetAuthorizationTokenResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
