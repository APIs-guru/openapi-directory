import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDisassociateClientDeviceFromCoreDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" })
  coreDeviceThingName: string;
}


export class BatchDisassociateClientDeviceFromCoreDeviceHeaders extends SpeakeasyBase {
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
}


export class BatchDisassociateClientDeviceFromCoreDeviceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.DisassociateClientDeviceFromCoreDeviceEntry })
  entries?: shared.DisassociateClientDeviceFromCoreDeviceEntry[];
}


export class BatchDisassociateClientDeviceFromCoreDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchDisassociateClientDeviceFromCoreDevicePathParams;

  @Metadata()
  headers: BatchDisassociateClientDeviceFromCoreDeviceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
}


export class BatchDisassociateClientDeviceFromCoreDeviceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchDisassociateClientDeviceFromCoreDeviceResponse?: shared.BatchDisassociateClientDeviceFromCoreDeviceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
