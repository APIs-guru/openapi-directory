import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchDisassociateClientDeviceFromCoreDevicePathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class BatchDisassociateClientDeviceFromCoreDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisassociateClientDeviceFromCoreDeviceRequestBody extends SpeakeasyBase {
    entries?: shared.DisassociateClientDeviceFromCoreDeviceEntry[];
}
export declare class BatchDisassociateClientDeviceFromCoreDeviceRequest extends SpeakeasyBase {
    pathParams: BatchDisassociateClientDeviceFromCoreDevicePathParams;
    headers: BatchDisassociateClientDeviceFromCoreDeviceHeaders;
    request: BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
}
export declare class BatchDisassociateClientDeviceFromCoreDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchDisassociateClientDeviceFromCoreDeviceResponse?: shared.BatchDisassociateClientDeviceFromCoreDeviceResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
