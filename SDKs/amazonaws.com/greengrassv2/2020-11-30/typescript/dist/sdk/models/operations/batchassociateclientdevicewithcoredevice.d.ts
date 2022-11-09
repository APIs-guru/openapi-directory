import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchAssociateClientDeviceWithCoreDevicePathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class BatchAssociateClientDeviceWithCoreDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchAssociateClientDeviceWithCoreDeviceRequestBody extends SpeakeasyBase {
    entries?: shared.AssociateClientDeviceWithCoreDeviceEntry[];
}
export declare class BatchAssociateClientDeviceWithCoreDeviceRequest extends SpeakeasyBase {
    pathParams: BatchAssociateClientDeviceWithCoreDevicePathParams;
    headers: BatchAssociateClientDeviceWithCoreDeviceHeaders;
    request: BatchAssociateClientDeviceWithCoreDeviceRequestBody;
}
export declare class BatchAssociateClientDeviceWithCoreDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchAssociateClientDeviceWithCoreDeviceResponse?: shared.BatchAssociateClientDeviceWithCoreDeviceResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
