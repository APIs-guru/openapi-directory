import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchAssociateClientDeviceWithCoreDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" })
  coreDeviceThingName: string;
}


export class BatchAssociateClientDeviceWithCoreDeviceHeaders extends SpeakeasyBase {
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


export class BatchAssociateClientDeviceWithCoreDeviceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AssociateClientDeviceWithCoreDeviceEntry })
  entries?: shared.AssociateClientDeviceWithCoreDeviceEntry[];
}


export class BatchAssociateClientDeviceWithCoreDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchAssociateClientDeviceWithCoreDevicePathParams;

  @Metadata()
  headers: BatchAssociateClientDeviceWithCoreDeviceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchAssociateClientDeviceWithCoreDeviceRequestBody;
}


export class BatchAssociateClientDeviceWithCoreDeviceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchAssociateClientDeviceWithCoreDeviceResponse?: shared.BatchAssociateClientDeviceWithCoreDeviceResponse;

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
