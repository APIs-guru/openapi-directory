import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateCapacityProvider = "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider"
}


export class UpdateCapacityProviderHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCapacityProviderXAmzTargetEnum;
}


export class UpdateCapacityProviderRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCapacityProviderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCapacityProviderRequest;
}


export class UpdateCapacityProviderResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCapacityProviderResponse?: shared.UpdateCapacityProviderResponse;
}
