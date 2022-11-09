import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteAccelerator = "GlobalAccelerator_V20180706.DeleteAccelerator"
}


export class DeleteAcceleratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteAcceleratorXAmzTargetEnum;
}


export class DeleteAcceleratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteAcceleratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAcceleratorRequest;
}


export class DeleteAcceleratorResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotDisabledException?: any;

  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  associatedListenerFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
