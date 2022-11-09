import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvokeDeviceMethodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class InvokeDeviceMethodHeaders extends SpeakeasyBase {
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


// InvokeDeviceMethodRequestBodyDeviceMethod
/** 
 * The device method to invoke.
**/
export class InvokeDeviceMethodRequestBodyDeviceMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @Metadata({ data: "json, name=MethodName" })
  methodName?: string;
}


export class InvokeDeviceMethodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceMethod" })
  deviceMethod?: InvokeDeviceMethodRequestBodyDeviceMethod;

  @Metadata({ data: "json, name=deviceMethodParameters" })
  deviceMethodParameters?: string;
}


export class InvokeDeviceMethodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InvokeDeviceMethodPathParams;

  @Metadata()
  headers: InvokeDeviceMethodHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: InvokeDeviceMethodRequestBody;
}


export class InvokeDeviceMethodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invokeDeviceMethodResponse?: shared.InvokeDeviceMethodResponse;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  rangeNotSatisfiableException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
