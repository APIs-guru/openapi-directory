import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV2LoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetV2LoggingOptionsRequest extends SpeakeasyBase {
    headers: GetV2LoggingOptionsHeaders;
}
export declare class GetV2LoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    getV2LoggingOptionsResponse?: shared.GetV2LoggingOptionsResponse;
    internalException?: any;
    notConfiguredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
