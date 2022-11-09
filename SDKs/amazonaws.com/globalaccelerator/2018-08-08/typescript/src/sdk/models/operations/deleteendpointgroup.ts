import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteEndpointGroup = "GlobalAccelerator_V20180706.DeleteEndpointGroup"
}


export class DeleteEndpointGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteEndpointGroupXAmzTargetEnum;
}


export class DeleteEndpointGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteEndpointGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteEndpointGroupRequest;
}


export class DeleteEndpointGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  endpointGroupNotFoundException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
