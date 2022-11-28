import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchDisassociateClientDeviceFromCoreDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" })
  coreDeviceThingName: string;
}


export class BatchDisassociateClientDeviceFromCoreDeviceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class BatchDisassociateClientDeviceFromCoreDeviceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: shared.DisassociateClientDeviceFromCoreDeviceEntry })
  entries?: shared.DisassociateClientDeviceFromCoreDeviceEntry[];
}


export class BatchDisassociateClientDeviceFromCoreDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchDisassociateClientDeviceFromCoreDevicePathParams;

  @SpeakeasyMetadata()
  headers: BatchDisassociateClientDeviceFromCoreDeviceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
}


export class BatchDisassociateClientDeviceFromCoreDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  batchDisassociateClientDeviceFromCoreDeviceResponse?: shared.BatchDisassociateClientDeviceFromCoreDeviceResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
