import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvokeDeviceMethodPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class InvokeDeviceMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The device method to invoke.
**/
export declare class InvokeDeviceMethodRequestBodyDeviceMethod extends SpeakeasyBase {
    deviceType?: string;
    methodName?: string;
}
export declare class InvokeDeviceMethodRequestBody extends SpeakeasyBase {
    deviceMethod?: InvokeDeviceMethodRequestBodyDeviceMethod;
    deviceMethodParameters?: string;
}
export declare class InvokeDeviceMethodRequest extends SpeakeasyBase {
    pathParams: InvokeDeviceMethodPathParams;
    headers: InvokeDeviceMethodHeaders;
    request: InvokeDeviceMethodRequestBody;
}
export declare class InvokeDeviceMethodResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    invokeDeviceMethodResponse?: shared.InvokeDeviceMethodResponse;
    preconditionFailedException?: any;
    rangeNotSatisfiableException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
