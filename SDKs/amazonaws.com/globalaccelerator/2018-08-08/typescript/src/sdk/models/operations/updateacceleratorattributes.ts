import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes"
}


export class UpdateAcceleratorAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAcceleratorAttributesXAmzTargetEnum;
}


export class UpdateAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAcceleratorAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAcceleratorAttributesRequest;
}


export class UpdateAcceleratorAttributesResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAcceleratorAttributesResponse?: shared.UpdateAcceleratorAttributesResponse;
}
