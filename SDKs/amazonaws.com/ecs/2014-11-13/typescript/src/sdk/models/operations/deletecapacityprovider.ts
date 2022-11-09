import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteCapacityProvider = "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider"
}


export class DeleteCapacityProviderHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCapacityProviderXAmzTargetEnum;
}


export class DeleteCapacityProviderRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteCapacityProviderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCapacityProviderRequest;
}


export class DeleteCapacityProviderResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteCapacityProviderResponse?: shared.DeleteCapacityProviderResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
