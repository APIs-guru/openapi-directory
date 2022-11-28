import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLoggingOptionsRequest extends SpeakeasyBase {
    headers: GetLoggingOptionsHeaders;
}
export declare class GetLoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    getLoggingOptionsResponse?: shared.GetLoggingOptionsResponse;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
