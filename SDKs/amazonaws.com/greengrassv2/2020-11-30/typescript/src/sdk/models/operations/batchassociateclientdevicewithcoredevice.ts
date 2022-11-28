import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchAssociateClientDeviceWithCoreDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" })
  coreDeviceThingName: string;
}


export class BatchAssociateClientDeviceWithCoreDeviceHeaders extends SpeakeasyBase {
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


export class BatchAssociateClientDeviceWithCoreDeviceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: shared.AssociateClientDeviceWithCoreDeviceEntry })
  entries?: shared.AssociateClientDeviceWithCoreDeviceEntry[];
}


export class BatchAssociateClientDeviceWithCoreDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchAssociateClientDeviceWithCoreDevicePathParams;

  @SpeakeasyMetadata()
  headers: BatchAssociateClientDeviceWithCoreDeviceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchAssociateClientDeviceWithCoreDeviceRequestBody;
}


export class BatchAssociateClientDeviceWithCoreDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  batchAssociateClientDeviceWithCoreDeviceResponse?: shared.BatchAssociateClientDeviceWithCoreDeviceResponse;

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
