import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvokeDeviceMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class InvokeDeviceMethodHeaders extends SpeakeasyBase {
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


// InvokeDeviceMethodRequestBodyDeviceMethod
/** 
 * The device method to invoke.
**/
export class InvokeDeviceMethodRequestBodyDeviceMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=MethodName" })
  methodName?: string;
}


export class InvokeDeviceMethodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceMethod" })
  deviceMethod?: InvokeDeviceMethodRequestBodyDeviceMethod;

  @SpeakeasyMetadata({ data: "json, name=deviceMethodParameters" })
  deviceMethodParameters?: string;
}


export class InvokeDeviceMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvokeDeviceMethodPathParams;

  @SpeakeasyMetadata()
  headers: InvokeDeviceMethodHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InvokeDeviceMethodRequestBody;
}


export class InvokeDeviceMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  invokeDeviceMethodResponse?: shared.InvokeDeviceMethodResponse;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  rangeNotSatisfiableException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
