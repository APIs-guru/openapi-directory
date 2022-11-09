import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInputRoutingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  The identifer of the input.
**/
export declare class ListInputRoutingsRequestBodyInputIdentifier extends SpeakeasyBase {
    iotEventsInputIdentifier?: shared.IotEventsInputIdentifier;
    iotSiteWiseInputIdentifier?: shared.IotSiteWiseInputIdentifier;
}
export declare class ListInputRoutingsRequestBody extends SpeakeasyBase {
    inputIdentifier: ListInputRoutingsRequestBodyInputIdentifier;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListInputRoutingsRequest extends SpeakeasyBase {
    headers: ListInputRoutingsHeaders;
    request: ListInputRoutingsRequestBody;
}
export declare class ListInputRoutingsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listInputRoutingsResponse?: shared.ListInputRoutingsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
