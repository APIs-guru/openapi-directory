import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingAccelerator = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator"
}


export class CreateCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCustomRoutingAcceleratorXAmzTargetEnum;
}


export class CreateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomRoutingAcceleratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomRoutingAcceleratorRequest;
}


export class CreateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCustomRoutingAcceleratorResponse?: shared.CreateCustomRoutingAcceleratorResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
