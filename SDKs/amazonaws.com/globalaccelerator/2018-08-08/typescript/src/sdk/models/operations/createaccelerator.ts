import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateAccelerator = "GlobalAccelerator_V20180706.CreateAccelerator"
}


export class CreateAcceleratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAcceleratorXAmzTargetEnum;
}


export class CreateAcceleratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAcceleratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAcceleratorRequest;
}


export class CreateAcceleratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAcceleratorResponse?: shared.CreateAcceleratorResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
